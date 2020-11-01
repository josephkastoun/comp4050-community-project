const mongoose = require('mongoose');
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        required: true,
        maxlength: 32
    },
    balance: {
        type: Number,
        default: 100
    },
    address: {
        type: String,
        required: true,
    },
    about: {
        type: String,
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    },
    photo: {
        data: Buffer,
        contentType: String,
    }
}, {timestamps: true});



userSchema.virtual('password')
.set(function(password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
})
.get(function() {
    return this._password
})


userSchema.methods = {
    
    authenticate: function(plainPassword) {
        return this.encryptPassword(plainPassword) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if(!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                                .update(password)
                                .digest('hex')
        } catch (err) {
            return '';
        }
    }
};

module.exports = mongoose.model("User", userSchema);