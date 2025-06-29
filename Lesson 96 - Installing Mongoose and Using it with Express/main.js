import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const Todo = new todo ({Title : "Hey first todo" , desc : "Description of this todo", isDone : false});
    // const todo = new Todo({  desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5* Math.random()) })
    Todo.save();
    res.send('Hello World!');
})

// app.get('/a', async (req, res) => { 
//     let todo = await Todo.findOne({})
//     console.log(todo)
//     res.json({title: todo.title, desc: todo.desc})
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})