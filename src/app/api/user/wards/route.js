import User from "@/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export const GET = async () => {
    try {
        const fetch_data = await mongoose.connection.db.collection("user_details");
        const result = await fetch_data.find({}).sort({ updatedAt: -1 }).toArray();
        const wardCounts = result.reduce((acc, item) => {
            const ward = item?.Ward;
            if (acc[ward]) {
                acc[ward].numberOfUser += 1;
            } else {
                acc[ward] = { label: ward, numberOfUser: 1 };
            }
            return acc;
        }, {});
        const wardArray = Object.values(wardCounts);
        return NextResponse.json(
            { totalWards: wardArray, success: true },
            { status: 200 }
        );
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { error, success: false },
            { status: 500 }
        );
    }
};