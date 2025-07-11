import mongoose, { Document, Schema } from "mongoose";

export interface IConfig extends Document {
  app: string;
  mmLossAlertTime?: number;
}

const ConfigSchema: Schema = new Schema<IConfig>({
  app: { type: String, required: true },
  mmLossAlertTime: { type: Number },
}, { strict: false });

export const Config =
  mongoose.models.Config || mongoose.model<IConfig>("Config", ConfigSchema, "config");
