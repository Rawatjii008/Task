import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongo from "@/db/db";
import { object, string, boolean } from "yup";

connectMongo();

const updateSchema = object({
  Remarks: string().optional(),
  Garbage_Collected: boolean().optional(),
});

export const GET = async (req, { params }) => {
  try {
    const { unique_property_id } = await params;

    if (!unique_property_id) {
      return NextResponse.json(
        { error: "Missing unique_property_id parameter" },
        { status: 400 }
      );
    }

    const fetch_data = await mongoose.connection.db.collection("user_details");

    const result = await fetch_data.findOne({
      Unique_Property_ID: unique_property_id,
    });

    if (!result) {
      return NextResponse.json(
        { error: "Data not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ result, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { error: "Internal Server Issue", success: false, error },
      { status: 500 }
    );
  }
};

export const PUT = async (req, { params }) => {
  try {
    const { unique_property_id } = await params;

    if (!unique_property_id) {
      return NextResponse.json(
        { error: "Missing unique_property_id parameter" },
        { status: 400 }
      );
    }

    const body = await req.json();
    await updateSchema.validate(body);
    const { Remarks, Garbage_Collected } = body;

    const update_user = {
      updatedAt: new Date(),
      ...(Remarks && { Remarks }),
      ...(Garbage_Collected !== undefined && { Garbage_Collected }),
    };

    const fetch_data = mongoose.connection.db.collection("user_details");

    let result = await fetch_data.findOne({
      Unique_Property_ID: unique_property_id,
    });

    if (!result) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    result = await fetch_data.findOneAndUpdate(
      { Unique_Property_ID: unique_property_id },
      { $set: update_user },
      { returnDocument: "after" }
    );

    return NextResponse.json({ result, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { error: "Internal Server Issue", success: false },
      { status: 500 }
    );
  }
};
