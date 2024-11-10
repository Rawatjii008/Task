import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import UserDetails from "@/models/userDetailsSchema ";
import connectMongo from "@/db/db";

connectMongo();
export const POST = async (request) => {
  try {
    // const { searchParams } = new URL(request.url);
    // const page = parseInt(searchParams.get("page")) || 1;
    // const limit = parseInt(searchParams.get("limit")) || 100;
    // const skip = (page - 1) * limit;

    const fetch_data = await mongoose.connection.db.collection("user_details");
    const result = await fetch_data.find({}) .sort({ updatedAt: -1 }).toArray();
     // const result = await fetch_data
    //   .find({})
    //   .sort({ updatedAt: -1 })
    //   .skip(skip)
    //   .limit(limit)
    //   .toArray();

    const totalUser = await fetch_data.countDocuments({});

    const countUserFalse = await fetch_data.countDocuments({
      Garbage_Collected: false,
    });

    const countUserTrue = await fetch_data.countDocuments({
      Garbage_Collected: true,
    });

    return NextResponse.json(
      { totalUser, countUserFalse, countUserTrue, result, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal Server Issue" },
      { status: 500 }
    );
  }
};
// export const POST = async (req) => {
//   try {
//     const {
//       Unique_Property_ID,
//       Name_of_Localaty,
//       Name_of_Household_Owner,
//       Name_of_Household_Owner_Father_Husband,
//       House_Type,
//       No_of_Stories,
//       No_of_Rooms,
//       Source_of_Water_Supply,
//       Objective_of_use,
//       Use_Self_Rent,
//       Total_Area_Sq_Ft,
//       Coverd_Area_Sq_Ft_Residential,
//       Coverd_Area_Sq_Ft_Commercial,
//       Uncoverd_Area_Sq_Ft,
//       Mobile_No,
//       Front_Road_Type_Width_in_Feet,
//       Remarks,
//       Status,
//     } = await req.json();
//     const userDetails = await new UserDetails({
//       Unique_Property_ID,
//       Name_of_Localaty,
//       Name_of_Household_Owner,
//       Name_of_Household_Owner_Father_Husband,
//       House_Type,
//       No_of_Stories,
//       No_of_Rooms,
//       Source_of_Water_Supply,
//       Objective_of_use,
//       Use_Self_Rent,
//       Total_Area_Sq_Ft,
//       Coverd_Area_Sq_Ft_Residential,
//       Coverd_Area_Sq_Ft_Commercial,
//       Uncoverd_Area_Sq_Ft,
//       Mobile_No,
//       Front_Road_Type_Width_in_Feet,
//       Remarks,
//       Status,
//     }).save();
//     return NextResponse.json({ userDetails, success: true }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// };
