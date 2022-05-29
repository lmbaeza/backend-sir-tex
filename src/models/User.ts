import mongoose, { Schema, model } from 'mongoose';

const ID_TYPES = ['CC', 'CE'];

export interface User extends mongoose.Document {
    first_name: string;
    last_name: string;
    age: number;
    id_type: string;
    id: number;
    username: string;
    password: string;
    create_at: Date;
    update_at: Date;
}

const UserSchema = new Schema({
    first_name: {
        type: String,
        uppercase: true, // Always convert `first_name` to uppercase
        required: true
    },
    last_name: {
        type: String,
        uppercase: true, // Always convert `last_name` to uppercase
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 65
    },
    id_type: {
        type: String,
        uppercase: true, // Always convert `last_name` to uppercase
        required: true,
        enum: ID_TYPES
    },
    id: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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

export default model<User>('User', UserSchema);