import mongoose from "mongoose";



const historySchema = new mongoose.Schema({
    house_id: {
        type: String,
        required: true,
        maxlength: 100,
    },
    employee_id: {
        type: String,
        required: true,
        maxlength: 100,
    },
    is_garabge_collected: {
        type: Boolean,
        required: true
    },
    start_date: {
        type: Date,
        default:Date.now()
      
    },
    end_date: {
        type: Date,
        default:Date.now()
       
},
   
    message:{
        type: String,
        required: function() { return !this.is_garabge_collected; },
       required:false
    }
}, {
    timestamps: true
});


export default mongoose.models.past_history || mongoose.model("past_history", historySchema);