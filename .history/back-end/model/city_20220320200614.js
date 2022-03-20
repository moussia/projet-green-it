import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    codepostal: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    scoreglobaldepartement: {
        type: String,
        required: true
    },
    scoreglobalregion: {
        type: String,
        required: true
    },
    // role: {
    //     enum: ['PARENT', 'PROFESSIONAL'],
    //     default: 'PARENT'
    // },
    // birthday: {
    //     type: Date,
    //     required: true
    // },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    }
});

export default model('User', schema);