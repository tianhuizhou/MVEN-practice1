const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//connect with MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=>{
    console.log('MongoDB database connection established successfully');
})

//import routes
const usersRouter = require('./route/users');
const tasksRouter = require('./route/tasks');

//switch to routes
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

//start listen
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});