import mongoose, { Document, Schema } from "mongoose";

export interface ICoindcxTds extends Document {
  key: string;
}

const CoindcxTdsSchema: Schema<ICoindcxTds> = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { strict: false }
);

// Create the model
export const CoindcxTds =
  mongoose.models.CoindcxTds || mongoose.model<ICoindcxTds>("CoindcxTds", CoindcxTdsSchema, "coindcxTds");
