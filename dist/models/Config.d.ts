import mongoose from 'mongoose';
declare const Config: mongoose.Model<{
    app: string;
    mmLossAlertTime?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    app: string;
    mmLossAlertTime?: number | null | undefined;
}, {}> & {
    app: string;
    mmLossAlertTime?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    app: string;
    mmLossAlertTime?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    app: string;
    mmLossAlertTime?: number | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    app: string;
    mmLossAlertTime?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Config;
