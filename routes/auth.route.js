const { apiKeyGenerator, apiKeyMiddleWare } = require("../lib/apikey.config");
const userModel = require("../models/user.model");
const bcrypt = require('bcrypt')

const router = require("express").Router();

router.post("/register", async (req, res) => {
    try {
      //allow user input their own data to register
      //   console.log(req.body)
        let {email,password,firstName,lastName,phone,address,city,country,description} = req.body
        let hashedPassword = await bcrypt.hash(password, 10)

        let tempObj={
            email,
            password:hashedPassword,
            userInfo:{
                firstName,
                lastName,
                phone,
                address,
                city,
                country
            },
            description
        }
      let user = new userModel(tempObj);
      //dont remove this line
      user.apiKey = apiKeyGenerator();
      //dont remove line above
        console.log(user)
      await user.save()
      res.status(201).json({ user })
    } catch (error) {
        res.status(400).json({ message:"cannot register" })
    }
  })
  .post("/signin", async (req, res) => {
    try {
        let { email, password} = req.body

        let user = await userModel.findOne({ email })
        if(!user){
          return res.status(400).json({ message: "cannot connect 700 error!"})
        }

        //you should use bcrypt to hash password
        //and compare hash
        //https://www.npmjs.com/package/bcrypt
        //remove line below and replace with bcrypt compare
        let passwordMatch = bcrypt.compareSync(password,user.password)
        // console.log(passwordMatch)
        if(!passwordMatch){
            return res.status(400).json({ message: "trying to hack me leh 700?"})
        }
        delete user.password //deletes from object password key and value
        res.status(200).json({user})

    } catch (error) {}
  })
  .get("/", apiKeyMiddleWare, async (req, res) => {
    res.status(200).json({ message: "you made it", user: req.user})
  });

module.exports = router;
