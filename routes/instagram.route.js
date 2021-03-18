const router = require('express').Router()
const User = require('../models/user.model')
const mockUserData = require('../lib/mockUserData')

router.get('/', (req, res) => {
    try{
        res.status(200).json({ mockUserData })
    }catch(e){
        console.log(e)
        res.status(400).json({ message: "didnt get all user data"})
    }
})

/*
Get post
 */
router.get("/", async(req, res) => {
    try{
        let mockUserData = {mockUserData}.map(() => {
            {}
        })
    }catch(e){

    }
})


/*
Create post
 */
router.post("/create/:id", async(req, res) => {
    // Login logic
    try{
        res.redirect("/")
    }catch(e){

    }
})

/*
Update post - We can either edit image or text(comments) here
 */
router.put("/update/:id", async(req, res) => {
    //Add new post logic
    try{
        res.redirect("/")

    }catch(e){

    }
})

/*
Delete post - We are going to delete either images or (text)comments here
*/
router.delete("delete/:id", (req, res) => {
    //Delete post logic
    try{
        res.render()
    }catch(e){

    }
})

/*

 */

module.exports = router
