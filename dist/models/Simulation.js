import mongoose, { Schema } from "mongoose";
const SimulationSchema = new Schema({}, { strict: false });
export const Simulation = mongoose.models.Simulation || mongoose.model("Simulation", SimulationSchema);
//# sourceMappingURL=Simulation.js.map