import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    reqired: [true, "Please provide your name"],
    minLength: [3, "Name must be at least  3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    trim: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Please enter a valid email address",
    },
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    maxLength: [10, "Phone number must be 10 digits"],
  },

  subject: {
    type: String,
    required: [true, "Subject field cannot be empty"],
    maxLength: [250, "subject is too long. Please keep it short and sweet."],
  },
  message: {
    type: String,
    required: [true, "Message field cannot be empty"],
    maxLength: [500, "Message is too long. Please keep it short and sweet."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Contact =
  mongoose.models.contact || mongoose.model("contact", contactSchema);
export default Contact;
