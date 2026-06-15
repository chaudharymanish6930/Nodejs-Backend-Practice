import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      default: 0,
    },

    phone: {
      type: String,
      required: true,
    },

    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
  // automatically date/time fields maintain karo.
);

export const Doctor = mongoose.model("Doctor", doctorSchema);