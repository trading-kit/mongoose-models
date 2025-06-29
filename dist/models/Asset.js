import mongoose from 'mongoose';
const { Schema } = mongoose;
const AssetSchema = new Schema({
    depositTo: {
        type: String,
        required: true,
    },
    asset: {
        type: String,
        required: true,
    },
    withdrawalFrom: {
        type: String,
        required: true,
    },
}, { strict: false });
//create unique index  depositTo  asset and withdrawalFrom
AssetSchema.index({ depositTo: 1, asset: 1, withdrawalFrom: 1 }, { unique: true });
const Asset = mongoose.model('Asset', AssetSchema);
export default Asset;
