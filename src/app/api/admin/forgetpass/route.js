import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const PATCH = async (req) => {
  try {
    const { email, password, confirmPassword } = await req.json();
    if (!email || !password || !confirmPassword) {
      return NextResponse.json(
        { message: "All fields are required", success: false },
        { status: 500 }
      );
    }
    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          message: "Password and Confirm Password must be same",
          success: false,
        },
        { status: 500 }
      );
    }
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return NextResponse.json(
        { message: "user not found", success: false },
        { status: 500 }
      );
    }

    const hashPassword = await bcrypt.hash(confirmPassword, 10);
    console.log(hashPassword);

    const updateduser = await User.findOneAndUpdate(
      { email },
      { password: hashPassword }
    );
    console.log(updateduser);
    return NextResponse.json(
      { message: "user updated successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server issue",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
};
