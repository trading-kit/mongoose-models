import mongoose from "mongoose";
declare const CoindcxTds: mongoose.Model<{
    key: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    key: string;
}, {}> & {
    key: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    key: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    key: string;
}>, {}> & mongoose.FlatRecord<{
    key: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default CoindcxTds;
