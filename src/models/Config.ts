import mongoose, { Document, Schema } from "mongoose";

export interface IConfig extends Document {
  app: string;
  mmLossAlertTime?: number;
  orders_active: boolean; // New field to track if orders are active
  exchange?: string
}

const ConfigSchema: Schema = new Schema<IConfig>({
  app: { type: String, required: true },
  mmLossAlertTime: { type: Number },
  orders_active: { type: Boolean, default: true }, // Default to true
  exchange: { type: String, required: false}
}, { strict: false });

export const Config =
  mongoose.models.Config || mongoose.model<IConfig>("Config", ConfigSchema, "config");
