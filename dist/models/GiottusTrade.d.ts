import mongoose from "mongoose";
export interface IGiottusTrade extends Document {
    date: Date;
    market: string;
    tds: number;
    tds_asset: string;
    fee: number;
    fee_asset: string;
    total: number;
    amount: number;
    price: number;
    gst: number;
    id: string;
    coinpair: string;
    type: string;
    user: string;
}
export declare const GiottusTrade: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=GiottusTrade.d.ts.map