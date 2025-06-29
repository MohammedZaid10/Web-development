import mongoose from "mongoose";


// Read this documentation to understand schematypes in mongoose and how to use required keyword and giving default values : https://mongoosejs.com/docs/schematypes.html

const todoSchema = new mongoose.Schema({
    // title: {type: String, required: true, default: "Hey"},
    title: String,
    desc: String,
    isDone: Boolean
});

export const todo = mongoose.model('todo', todoSchema);
// Explicitly define the collection name as 'todo' (singular)
// export const todo = mongoose.model('todo', todoSchema, 'todo');