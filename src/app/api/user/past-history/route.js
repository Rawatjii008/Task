import { NextResponse } from "next/server";
import connectMongo from "@/db/db";
import pastHistory from "@/models/pastHistory";
connectMongo();


export const POST = async (req) => {
    try {
        const { 
            house_id, 
            employee_id, 
            is_garbage_collected,
            message, 
            start_date, 
            end_date
        } = await req.json();

  
       

        if (! is_garbage_collected && !message) {
            return NextResponse.json(
                { error: "Message is required when garbage is not collected", success: false },
                { status: 400 }
            );
        }

        const newHistory = new pastHistory({
            house_id,
            employee_id,
            is_garbage_collected, 
            message: is_garbage_collected ? "" : message,
            start_date: new Date( start_date),  
            end_date: end_date ? new Date(end_date) : undefined, 
        });

       

        const save_history = await newHistory.save();
       
        
        return NextResponse.json(
            { past_history: save_history, success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error saving history:", error.message); 
        return NextResponse.json(
            { error: error.message, success: false }, 
            { status: 500 }
        );
    }
};




export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
      
        const house_id = searchParams.get("house_id");
        const start_date = searchParams.get("start_date");
        const end_date = searchParams.get("end_date");
        
        let query = {};
       
        if (house_id) {
            query.house_id = house_id;
        }
    
       
        if (start_date || end_date) {
            const StartDate = start_date ? new Date(start_date) : null;
            const EndDate = end_date ? new Date(end_date) : new Date();
        
            if (StartDate && !isNaN(StartDate)) {
                query.start_date = { $gte: StartDate }; // Correctly filtering by start_date
            }
        
            if (EndDate && !isNaN(EndDate)) {
                query.end_date = { $lte: EndDate }; // Ensure end_date is set correctly
            }
        }
        
       const histories = await pastHistory.find(query).select('-__v');
          return NextResponse.json(
            { past_histories: histories, success: true },
            { status: 200 }
        );
    } catch (error) {
        
        return NextResponse.json(
            { error: "Internal server error", success: false },
            { status: 500 }
        );
    }
};

