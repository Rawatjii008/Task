import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  complainSub: {
    type: String,
    required: true,
    maxlength: 255,
  },
  complainDesc: {
    type: String,
    required: true,
  },
  complainZone: {
    type: String,
    required: true,
    maxlength: 100,
  },
  complainAddress: {
    type: String,
    required: true,
    maxlength: 255,
  },
  complainLandmark: {
    type: String,
    required: true,
    maxlength: 255,
  },
  complainerName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  complainerMobile: {
    type: String,
    required: true,
    maxlength: 15,
  },
  complainerEmail: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  complainDate: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  complainTime: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the `complainTime` field
complaintSchema.pre('save', function(next) {
  this.complainTime = Date.now();
  next();
});

export default mongoose.models.Complaint || mongoose.model('Complaint', complaintSchema);
