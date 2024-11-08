import mongoose from "mongoose";

const userDetailsSchema = new mongoose.Schema({
  Unique_Property_ID: { type: String, unique: true },
  Name_of_Localaty: { type: String },
  Name_of_Household_Owner: { type: String },
  Name_of_Household_Owner_Father_Husband: { type: String },
  House_Type: { type: String },
  Source_of_Water_Supply: { type: String },
  Objective_of_use: { type: String },
  Use_Self_Rent: { type: String },
  Total_Area_Sq_Ft: { type: Number },
  Coverd_Area_Sq_Ft_Residential: { type: Number },
  Coverd_Area_Sq_Ft_Commercial: { type: Number },
  Uncoverd_Area_Sq_Ft: { type: Number },
  Mobile_No: { type: Number },
  Front_Road_Type_Width_in_Feet: { type: Number },
  Remarks: { type: String },
  Status: { type: String },
});

const UserDetails =
  mongoose.models.user_details ||
  mongoose.model("user_details", userDetailsSchema);

export default UserDetails;
