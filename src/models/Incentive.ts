import mongoose, { Schema, model } from 'mongoose';

import {Company, CompanySchema} from './Company'

export interface Incentive extends mongoose.Document {
    point: number;
    weight: number;
    redeemed: boolean;
    company_redeemed: Company;
    create_at: Date;
    update_at: Date;
}

export const IncentiveSchema = new Schema({
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
    company_redeemed: {
        type: CompanySchema,
        default: null
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

export default model<Incentive>('Incentive', IncentiveSchema);