const router = require('express').Router()
const User = require('../model/user.model')

router.get('/', (req, res) => {
    try{
        let users = User.find()
        console.log(users)
        res.status(200).json({ mockUserData })
    }catch(e){
        console.log(e)
        res.status(400).json({ message: "didnt get all user data"})
    }
})


module.exports = router
