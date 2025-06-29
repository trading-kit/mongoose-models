import mongoose from 'mongoose';
declare const FlexibleLoan: mongoose.Model<{
    active: any;
    amount_usd: number;
    coin?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    active: any;
    amount_usd: number;
    coin?: string | null | undefined;
}, {}> & {
    active: any;
    amount_usd: number;
    coin?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    active: any;
    amount_usd: number;
    coin?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    active: any;
    amount_usd: number;
    coin?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    active: any;
    amount_usd: number;
    coin?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default FlexibleLoan;
