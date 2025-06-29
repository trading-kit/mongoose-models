import mongoose from 'mongoose';
declare const AutoBuy: mongoose.Model<{
    completed: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    completed: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}> & {
    completed: {
        type: BooleanConstructor;
        default: boolean;
    };
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    strict: false;
}, {
    completed: {
        type: BooleanConstructor;
        default: boolean;
    };
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    completed: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}> & mongoose.FlatRecord<{
    completed: {
        type: BooleanConstructor;
        default: boolean;
    };
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default AutoBuy;
