import connectMongo from "@/db/db";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
connectMongo();

const JWT_SECRET = "jwtTarunWebToken";
const bcrypt = require('bcryptjs');
export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json("user not found with this email", {
        status: 500,
      });
    }

    const isPasswordValid = await bcrypt.compare(password,  user.password);
    if (!isPasswordValid) {
      return NextResponse.json("password is not matched", { status: 500 });
    }

    const authToken = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);

    const response = NextResponse.json(
      { authToken, success: true },
      { status: 200 }
    );
     cookies().set("authToken", authToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    // response.cookies.set("authToken", authToken, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Issue", success: false },
      { status: 500 }
    );
  }
};
