import mongoose, { Document, Schema } from "mongoose";

export interface ISimulation extends Document {
  // Define any properties you expect in the Simulation document here
  // For example:
  // name?: string;
  // createdAt?: Date;
}

const SimulationSchema: Schema = new Schema<ISimulation>({}, { strict: false });

export const Simulation =
  mongoose.models.Simulation || mongoose.model<ISimulation>("Simulation", SimulationSchema);
