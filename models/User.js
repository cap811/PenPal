import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: {
        type: String,
        required: true,
        validate: [ isEmail, 'invalid email']
    },
    password: {

    }

});