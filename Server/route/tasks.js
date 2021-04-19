const router = require('express').Router();

let Task = require('../Schema/taskSchema');

//query the tasks by username
router.route('/').get((req, res) =>{
    Task.find(req.query)
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err))
})

//create a new task
router.route('/').post((req, res)=>{
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;
    const status = req.body.status;
    const newTask = new Task({
        username, title, description, date, status
    })
    newTask.save()
        .then(() => res.json('Task added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

//update a existing task
router.route('/update').post((req, res)=>{
    Task.find({"_id": req.body._id})
        .then(task => {
            console.log(task[0]);
            task[0].title = req.body.title;
            task[0].description = req.body.description;
            task[0].date = req.body.date;
            task[0].status = req.body.status;

            task[0].save()
                .then(() => res.json('task updated successfully'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

//delete a existing task
router.route('/').delete((req, res)=>{
    Task.findOneAndDelete({"_id": req.body._id})
        .then(res.json('Task deleted successfully!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;