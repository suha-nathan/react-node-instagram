require('../lib/mongoose.config')
const User = require('../models/user.model')

User.insertMany([
    {
        username: 'isaacyongmusic',
        email: "isaacNumber1@hotmail.com",
        password: "hiiamisaacspassword",
        apiKey: "1EEA6DC-JAM4DP2-PHVYPBN-V0XCJ9X",
        followers: [] ,
        following: [],
        posts: [],
        userInfo: {
            firstName: "isaac",
            lastName: "yong",
            phone: "91111111",
            address: "foofoo st over 9000",
            city: "Best side",
            country: "singapore"
        },
        description: "Hi guys i love playing music",
        photo: "https://via.placeholder.com/150"
    }
]).then(() => {
    console.log('completed seeding')
}).catch((e) => {
    console.log('error')
    console.log(e)
})