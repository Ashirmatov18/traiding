import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  if (!verify && url.includes("/adminadd")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (!verify && url.includes("/addcar")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
