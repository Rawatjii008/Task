import connectMongo from "@/db/db";
import Contact from "@/models/contactModels";
import { NextResponse } from "next/server";
connectMongo();

export const GET = async (req) => {
  try {

    return NextResponse.json({ savedContact, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Issue", success: false },
      { status: 500 }
    );
  }
};
