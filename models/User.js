const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User',UserSchema);