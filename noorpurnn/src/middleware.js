import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const middleware = (request) => {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin") && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname.startsWith("/dashboard") && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname.endsWith("/updateuser") && !authToken) {
    const id = pathname.split('/dashboard/')[1].split('/')[0];
    console.log(id,'check id');
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname.endsWith("/updateuser") && authToken) {
    return NextResponse.next();
  }
  const authRoutes = ["/forgetpassword", "/signup", "/login"];
  if (authRoutes.some(route => pathname.startsWith(route)) && authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};
