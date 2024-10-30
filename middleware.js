// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
    if (req.nextUrl.pathname === '/.well-known/apple-app-site-association') {
        const res = NextResponse.next();
        res.headers.set('Content-Type', 'application/json');
        return res;
    }
    return NextResponse.next();
}
