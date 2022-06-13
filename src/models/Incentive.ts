import mongoose, { Schema, model } from 'mongoose';
import QRCode from 'qrcode';

import {Company, CompanySchema} from './Company'

export interface Incentive extends mongoose.Document {
    point: number;
    weight: number;
    redeemed: boolean;
    qr: string;
    company_redeemed: Company;
    create_at: Date;
    update_at: Date;
}

export const IncentiveSchema = new Schema<Incentive>({
    point: {
        type: Number,
        min: 0
    },
    weight: {
        type: Number,
        min: 0
    },
    redeemed: {
        type: Boolean,
        default: false
    },
    qr: {
        type: String,
        default: undefined
    },
    company_redeemed: {
        type: CompanySchema,
        default: undefined
    },
    create_at: {
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    },
});

IncentiveSchema.pre('save', async function () {
    var obj: any = this;
    const URL = `${process.env.HOST_FRONTEND}/incentive/qr/${obj._id}` || `http://localhost:3001/incentive/qr/${obj._id}`;
    const qr = await QRCode.toDataURL(URL);
    this.qr = qr;
});

export default model<Incentive>('Incentive', IncentiveSchema);