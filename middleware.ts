import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const rewrite = request.nextUrl.searchParams.get("rewrite");
    if (!rewrite) return NextResponse.next();
    
    const url = new URL(rewrite);

    // Do not allow rewriting to ourselves
    if (url.hostname === request.nextUrl.hostname) return NextResponse.next();
    
    // Rewrite the url
    if (url) return NextResponse.rewrite(url, {request});
    
    return NextResponse.next();
}