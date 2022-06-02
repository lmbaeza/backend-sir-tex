import mongoose, { Schema, model } from 'mongoose';

import { Insentive, InsentiveSchema } from './Insentive'

const ID_TYPES = ['CC', 'CE'];
const ROLES    = ['ADMIN', 'USER'];

export interface User extends mongoose.Document {
    first_name: string;
    last_name: string;
    id_type: string;
    id: number;
    role: string;
    insentive: [Insentive];
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
    id_type: {
        type: String,
        uppercase: true, // Always convert `last_name` to uppercase
        required: true,
        enum: ID_TYPES
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        uppercase: true, // Always convert `last_name` to uppercase
        required: true,
        enum: ROLES,
        default: 'USER'
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    insentive: [InsentiveSchema],
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