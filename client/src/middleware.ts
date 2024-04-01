import { type NextRequest, NextResponse } from 'next/server'

import { protectedRoutes } from '~/consts/ProtectedRoutes'
import Router from '~/consts/Router'
import { parseJwt } from '~/helpers/parseJwt'
import { checkIsPathnameHasLocale, defaultLocale } from '~/i18n/i18n'

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|public|favicon.ico|banner.glb|robots.txt|images|$).*)'
  ]
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const user = parseJwt(request.cookies.get('refreshToken')?.value ?? '')

  const protectedRoute = protectedRoutes.find(route =>
    pathname.includes(route.route)
  )

  if (protectedRoute) {
    if (!user || !user.role.includes(protectedRoute.role)) {
      request.nextUrl.pathname = Router.Forbidden
      return NextResponse.redirect(request.nextUrl)
    }
  }

  const pathnameHasLocale = checkIsPathnameHasLocale(pathname)
  if (pathnameHasLocale) return NextResponse.next()

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
