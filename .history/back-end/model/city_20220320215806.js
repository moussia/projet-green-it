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
    accesInformation: {
        type: String,
        required: true
    },
    competenceAdministrative: {
        type: String,
        required: true
    },
    competenceNumerique: {
        type: String,
        required: true
    }
});

export default model('City', schema);