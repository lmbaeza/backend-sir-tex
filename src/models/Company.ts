import mongoose, { Schema, model } from 'mongoose';

export interface Company extends mongoose.Document {
    name: string;
    location: string;
}

export const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
});

export default model<Company>('Company', CompanySchema);