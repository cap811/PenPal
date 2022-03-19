import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
}); 

module.exports = mongoose.model("Blog", blogSchema)