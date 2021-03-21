import mongoose, { Schema } from 'mongoose';

const waypoint = new Schema({ long: Number, lat: Number, nature: String });
export const Waypoint = mongoose.model('Waypoint', waypoint);