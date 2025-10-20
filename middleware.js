import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Determine language from pathname
  let lang = 'uk';
  if (pathname.startsWith('/en')) {
    lang = 'en';
  } else if (pathname.startsWith('/pl')) {
    lang = 'pl';
  } else if (pathname.startsWith('/ru')) {
    lang = 'ru';
  }
  
  // Create response
  const response = NextResponse.next();
  
  // Add language and pathname headers for the layout to read
  response.headers.set('x-lang', lang);
  response.headers.set('x-pathname', pathname);
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json)$).*)',
  ],
};

