import mongoose, { Document } from "mongoose";
export interface ISimulation extends Document {
}
export declare const Simulation: mongoose.Model<any, {}, {}, {}, any, any> | mongoose.Model<ISimulation, {}, {}, {}, mongoose.Document<unknown, {}, ISimulation, {}> & ISimulation & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Simulation.d.ts.map