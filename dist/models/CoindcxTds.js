import mongoose from "mongoose";
const { Schema } = mongoose;
const CoindcxTdsSchema = new Schema({
    key: {
        type: String,
        required: true,
        unique: true,
    }
}, { strict: false });
//create index on
const CoindcxTds = mongoose.model("CoindcxTds", CoindcxTdsSchema, "coindcxTds");
//delete executed_qty :  0
export default CoindcxTds;
