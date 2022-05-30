import mongoose, { Schema, model } from 'mongoose';

export interface Insentive extends mongoose.Document {
    point: number;
    weight: number;
    redeemed: boolean;
}

export const InsentiveSchema = new Schema({
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
    }
});

export default model<Insentive>('Insentive', InsentiveSchema);