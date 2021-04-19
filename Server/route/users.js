const router = require('express').Router();
const bcrypt = require('bcrypt'); //encrypt password

let User = require('../Schema/userSchema');

//get all the user infos  *** only for admin testing ***
router.route('/').get(((req, res) => {
    //find users
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
}));

//create a user account
router.route('/').post(async (req, res)=>{
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({username: req.body.username, password: hashedPassword});
        newUser.save()
            .then(() => res.status(201).json('User has been created successfully!'))
            .catch(err => res.status(400).json('Error: ' + err))
    } catch{
        res.status(404).send();
    }
})

//login
//if succeed, return the user object
//failed, return Warning.
router.route('/login').post(async (req, res)=>{
    let user;
    console.log(`in server: ${req.body.username}`)
    user = User.find({"username": req.body.username})
        .then(user => {
            //res.status(200).json(user)
            // return an array
            if (user.length === 0){
                res.status(401).json("cannot find user");
                return null;
            } else {
                return user[0]
            }
        })
        .catch(err => res.status(400).json('Error: ' +err))
    user.then( async user => {
        //console.log(user._id);
        try {
            if(await bcrypt.compare(req.body.password, user.password)){
                res.status(200).json(user);
                console.log("Succeed!");
            } else {
                res.status(401).send("Password does not match");
            }
        } catch {
            res.status(400).send()
        }
    })
})
module.exports = router;