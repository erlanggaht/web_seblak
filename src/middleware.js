import { NextResponse } from 'next/server';

export function middleware(request) {

  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  if(request.url === 'http://localhost:3000/pages/pesanan_tamu/')return NextResponse.redirect(new URL('http://localhost:3000/pages/'),request.url)
  let p = []
  let reqs = request.nextUrl.search.split('=')[1].split('+').filter(m => m !== '' ? p = m : p = ["tidakvalid"])
  if(p[0] === 'tidakvalid') return NextResponse.redirect(new URL('/pages/pesanan_tamu/?id='+p,request.url)) 
  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    }
  });
}

export const config = {
    matcher : ['/pages/pesanan_tamu/']
}   