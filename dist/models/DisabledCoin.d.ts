import mongoose from "mongoose";
declare const DisabledCoin: mongoose.Model<{
    exchange: string;
    disabled: any;
    coin?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    exchange: string;
    disabled: any;
    coin?: string | null | undefined;
}, {}> & {
    exchange: string;
    disabled: any;
    coin?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    exchange: string;
    disabled: any;
    coin?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    exchange: string;
    disabled: any;
    coin?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    exchange: string;
    disabled: any;
    coin?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default DisabledCoin;
