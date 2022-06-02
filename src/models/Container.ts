import mongoose, { Schema, model } from 'mongoose';

export interface Container extends mongoose.Document {
    capacity: number;
    location: string;
}

export const ContainerSchema = new Schema({
    capacity: {
        type: Number,
        min: 0,
        required: true
    },
    location: {
        type: String,
        required: true
    },
});

export default model<Container>('Container', ContainerSchema);