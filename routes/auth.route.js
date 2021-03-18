const { apiKeyGenerator, apiKeyMiddleWare } = require("../lib/apikey.config");
const userModel = require("../model/user.model");

const router = require("express").Router();

router
  .post("/register", async (req, res) => {
    try {
      //allow user input their own data to register
      let user = new userModel({ email: "test", password: "test" });
      //dont remove this line
      user.apiKey = apiKeyGenerator();
      //dont remove line above

      await user.save()
      res.status(201).json({ user })
    } catch (error) {}
  })
  .post("/signin", async (req, res) => {
    try {
        let { email, password} = req.body

        let user = userModel.findOne({ email })
        if(!user){
          return res.status(400).json({ message: "cannot connect 700 error!"})
        }

        //you should use bcrypt to hash password
        //and compare hash
        //https://www.npmjs.com/package/bcrypt
        //remove line below and replace with bcrypt compare
        if(user.password != password){
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
