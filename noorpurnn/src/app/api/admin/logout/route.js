const { NextResponse } = require("next/server");

export const POST = async (req) => {
  try {
    const response = NextResponse.json({
      message: "Logedout successfully",
      success: true,
    });
     response.cookies.set("authToken", "", {
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    NextResponse.json({
      error: "Internal Server Issue",
      success: false,
    });
  }
};
