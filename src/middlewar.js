import { NextResponse } from 'next/server';
export function middleware(req, event) {
   const path = req.nextUrl.pathname

   return NextResponse.next({
    request
   })
  }

export const config = {
    matcher : ['/pages/list_menu']
}   