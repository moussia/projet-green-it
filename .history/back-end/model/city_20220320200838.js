import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema({
    commune: {
        type: String,
        required: true
    },
    codepostal: {
        type: String,
        required: true
    },
    scoreGlobal: {
        type: String,
        required: true
    },
    iris: {
        type: String,
        required: true
    },
    accesInterfaceNumerique: {
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