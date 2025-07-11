import mongoose, { Document, Schema } from "mongoose";

export interface ITradeSummary extends Document {
    user: string;
    date: string;
    side: string;
    quoteAsset: string;
    fee: number;
    quoteVolume: number;
}

const TradeSummarySchema: Schema<ITradeSummary> = new Schema<ITradeSummary>({
    user: { type: String, required: true },
    date: { type: String, required: true },
    side: { type: String, required: true },
    quoteAsset: { type: String, required: true },
    fee: { type: Number, required: true },
    quoteVolume: { type: Number, required: true },
}, { strict: false });

// Unique index on user, date, side, and quoteAsset
TradeSummarySchema.index({ user: 1, date: -1, side: 1, quoteAsset: 1 }, { unique: true });

export const TradeSummary =
    mongoose.models.TradeSummary || mongoose.model<ITradeSummary>("TradeSummary", TradeSummarySchema, "tradesummary");
