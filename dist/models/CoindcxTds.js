import mongoose, { Schema } from "mongoose";
const CoindcxTdsSchema = new Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    },
}, { strict: false });
// Create the model
export const CoindcxTds = mongoose.models.CoindcxTds || mongoose.model("CoindcxTds", CoindcxTdsSchema, "coindcxTds");
