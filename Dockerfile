FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --legacy-peer-deps

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# WO-INF-129: release number baked in by CI (empty = dev-<sha>).
ARG APP_RELEASE=
ARG GIT_SHA=
ARG BUILT_AT=
ENV NEXT_PUBLIC_APP_RELEASE=$APP_RELEASE NEXT_PUBLIC_GIT_SHA=$GIT_SHA NEXT_PUBLIC_BUILT_AT=$BUILT_AT
# Build without a persistent .next/cache mount. That cache survives even
# `docker build --no-cache`, which caused stale prerendered pages (e.g. a
# changed shared nav not propagating). A clean build each time guarantees
# every prerendered page reflects the current source.
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache curl

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
