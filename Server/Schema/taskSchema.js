const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let taskSchema = new Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    status: {type: String, required: true},
},{timestamps:true});

const Task = mongoose.model('task', taskSchema);
module.exports = Task;