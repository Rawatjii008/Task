import { cookies } from "next/headers";
import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const cookieStore = cookies();
    const authToken = cookieStore.get("authToken")?.value;
    try {
      if (!authToken) {
        return NextResponse.json({ message: "No token found" }, { status: 401 });
      }
      const users = await User.find().select("-password");
      return NextResponse.json({ users, success: true }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Internal Server Issue", success: false },
        { status: 500 }
      );
    }
  };