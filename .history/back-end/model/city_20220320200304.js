import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema({
    commune: {
        type: String,
        required: true
    },
    departement: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    scoredepartement: {
        type: String,
        required: true
    },
    phone: {
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