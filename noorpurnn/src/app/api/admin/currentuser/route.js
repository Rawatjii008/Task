import connectMongo from "@/db/db";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const JWT_SECRET = "jwtTarunWebToken";

connectMongo();

export const GET = async (req) => {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;
  try {
    // const authToken = await req.cookies.get("authToken")?.value;
    // console.log({ authTokenroute: authToken });
    if (!authToken) {
      return NextResponse.json({ message: "No token found" }, { status: 401 });
    }
    const data = jwt.verify(authToken, JWT_SECRET);
    const user = await User.findById(data.id).select("-password");
    return NextResponse.json({ user, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Issue", success: false },
      { status: 500 }
    );
  }
};
