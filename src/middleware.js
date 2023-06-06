import { NextResponse } from 'next/server';
export function middleware(request) {
  const path = request.nextUrl.pathname
    // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  if(request.url === `${process.env.URL_HOST}pages/pesanan_tamu/`)return NextResponse.redirect(new URL(`${process.env.URL_HOST}pages/`),request.url)
  let p = []
  let reqs = false && request.nextUrl.search.split('=')[1].split('+').filter(m => m !== '' ? p = m : p = ["tidakvalid"])
  if(p[0] === 'tidakvalid') return NextResponse.redirect(new URL('/pages/pesanan_tamu/?id='+p,request.url)) 
  

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
 


      return res
   


}

export const config = {
    matcher : ['/pages/pesanan_tamu/','/']
}   