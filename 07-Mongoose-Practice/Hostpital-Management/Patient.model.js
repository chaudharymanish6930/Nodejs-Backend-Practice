import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    disease: {
      type: String,
      required: true,
    },

    admittedAt: {
      type: Date,
      default: Date.now,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);