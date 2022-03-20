import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema({
    commune: {
        type: String,
    },
    codepostal: {
        type: String,
    },
    scoreGlobal: {
        type: String,
    },
    iris: {
        type: String,
    },
    accesInterfaceNumerique: {
        type: String,
    },
    accesInformation: {
        type: String,
    },
    competenceAdministrative: {
        type: String,
    },
    competenceNumerique: {
        type: String,
    }
});

export default model('City', schema);