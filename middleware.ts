import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const signedinPages = ['/']

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.has('ACCESS_TOKEN')

  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    if (!isAuthenticated) {
      return NextResponse.redirect('http://localhost:3000/signin')
    }
  }
}
