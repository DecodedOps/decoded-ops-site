import { NextResponse } from "next/server";
import { BUILT_AT, GIT_SHA, RELEASE } from "@/lib/release";

export const dynamic = "force-dynamic";

// WO-INF-129: public, read-only. Which release and commit this app is running.
export function GET() {
  return NextResponse.json(
    { release: RELEASE, sha: GIT_SHA, builtAt: BUILT_AT, tenant: "decoded-ops-website" },
    { headers: { "Cache-Control": "no-store" } },
  );
}
