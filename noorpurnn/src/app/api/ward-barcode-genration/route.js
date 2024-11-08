import connectMongo from "@/db/db"; // MongoDB connection
// import User from "@/models/user";
import UserDetails from "@/models/userDetailsSchema ";
import { NextResponse } from "next/server";
await connectMongo();

export const GET = async (req) => {
  try {
    const users = await UserDetails.find();
    const limitedUserList = 4314;
    let limituser =[];
    for(let i =0;i<limitedUserList;i++){
      limituser.push(users[i])
    }

    console.log(limituser.length,'limituser')

    return NextResponse.json(
      { limituser, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);

    // Return an error response if something goes wrong
    return NextResponse.json(
      { error: "Internal Server Issue", success: false },
      { status: 500 }
    );
  }
};