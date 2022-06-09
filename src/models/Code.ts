import mongoose, { Schema, model } from 'mongoose';

export interface Code extends mongoose.Document {
    code: string;
    used: boolean;
    create_at: Date;
    update_at: Date;
}

export const CodeSchema = new Schema<Code>({
    code: {
        type: String,
        required: true
    },
    used: {
        type: Boolean,
        default: false
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

export default model<Code>('Code', CodeSchema);