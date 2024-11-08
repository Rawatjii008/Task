import { NextResponse } from "next/server";
import User from "@/models/user";
import connectMongo from "@/db/db";
const bcrypt = require('bcryptjs');
connectMongo();

export const POST = async (req) => {
  try {
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const genSalt = 10;
    const hashedPassword = await bcrypt.hash(password, genSalt);

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const saved_user = await newUser.save();
    return NextResponse.json(
      { User: saved_user, success: false },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Issue", success: true },
      { status: 500 }
    );
  }
};
