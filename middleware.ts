import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const signedinPages = ['/']
  const unsignedinPages = ['/signin']
  const isAuthenticated = req.cookies.has('next-auth.session-token')

  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    if (!isAuthenticated) {
      return NextResponse.redirect('http://localhost:3000/signin')
    }
  }

  if (unsignedinPages.find((p) => p === req.nextUrl.pathname)) {
    if (isAuthenticated) {
      return NextResponse.redirect('http://localhost:3000')
    }
  }
}
