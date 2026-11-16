// Release number (WO-INF-129). Format YY.MM.N. CI bakes APP_RELEASE and GIT_SHA into the image as
// NEXT_PUBLIC_* build values; no release number reads dev-<sha7>, or dev-local outside CI.
const sha = process.env.NEXT_PUBLIC_GIT_SHA || "";

export const RELEASE =
  process.env.NEXT_PUBLIC_APP_RELEASE || (sha ? `dev-${sha.slice(0, 7)}` : "dev-local");
export const GIT_SHA = sha || "unknown";
export const BUILT_AT = process.env.NEXT_PUBLIC_BUILT_AT || null;
