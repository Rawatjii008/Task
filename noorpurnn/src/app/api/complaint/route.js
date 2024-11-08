import connectMongo from "@/db/db";
import Complaint from "@/models/complaint";
import { NextResponse } from "next/server";
connectMongo();
export const POST = async (req) => {
  try {
    const {
      complainSub,
      complainDesc,
      complainZone,
      complainAddress,
      complainLandmark,
      complainerName,
      complainerMobile,
      complainerEmail,
    } = await req.json();

    const newComplaint = await new Complaint({
      complainSub,
      complainDesc,
      complainZone,
      complainAddress,
      complainLandmark,
      complainerName,
      complainerMobile,
      complainerEmail,
    });

    const saved_complain = await newComplaint.save();
    return NextResponse.json({ saved_complain }, { status: 200 });
  } catch (error) {
    console.error("Create complaint error:", error);
    return NextResponse.json({ error: "Internal Server Issue" }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const Complaints = await Complaint.find();
    return NextResponse.json({ Complaints, success: true }, { status: 200 });
  } catch (error) {
    console.error("Get complaint error:", error);
    return NextResponse.json(
      { error: "Internal Server Issue", success: false },
      { status: 500 }
    );
  }
};
