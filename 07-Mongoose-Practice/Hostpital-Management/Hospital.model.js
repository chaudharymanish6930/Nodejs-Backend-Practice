import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    contactNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      lowercase: true,
    },

    totalBeds: {
      type: Number,
      default: 0,
    },

    availableBeds: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);