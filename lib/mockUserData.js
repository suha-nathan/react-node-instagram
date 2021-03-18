const mockUserData = [
    {
        username: 'isaacyongmusic',
        email: "isaacNumber1@hotmail.com",
        password: "hiiamisaacspassword",
        apiKey: "1EEA6DC-JAM4DP2-PHVYPBN-V0XCJ9X",
        followers: 9000 ,
        following: ['suha', 'logan', 'daryl'],
        posts: [{
            text: "I am sick of having to wake up so early every day!!!!!",
            image:"",
            isTextOnly: true,
            comments: [
                {
                    user: 'Suha',
                    comment: '700'
                },
                {
                    user: 'Logan',
                    comment: 'Yeah baby'
                }
            ]
        }, {
            text: "post2",
            image:"http://placehold.it/200x200/?text=isaac2",
            isTextOnly: false,
            comments: [
                {
                    user: 'Suha',
                    comment: '700'
                },
                {
                    user: 'Tristan',
                    comment: 'omg baguette crossaint'
                }
            ]
        }, {
            text: "post3",
            image:"http://placehold.it/200x200/?text=isaac3",
            isTextOnly: false,
            comments: [
                {
                    user: 'Daryl',
                    comment: 'Pills anyone'
                },
                {
                    user: 'Logan',
                    comment: 'Yeah baby'
                }
            ]
        }],
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
    },
    {
        email: "suhaNumber1@hotmail.com",
        password: "hiiamsuhaspassword",
        apiKey: "1EEA6DC-JUM4DP2-PHVYPBN-V0XCJ8X",
        followers: 10000 ,
        following: ['suha', 'logan', 'daryl', 'eugene'],
        posts: ["post1", "post2", "post3"],
        userInfo: {
            firstName: "suha",
            lastName: "nathan",
            phone: "92222222",
            address: "foobar st 700 la",
            city: "West side best side",
            country: "singapore"
        },
        description: "Hi everyone i love laughing at logan's stupidity",
        photo: "https://via.placeholder.com/150"
    },
    {
        email: "loganNumber1@hotmail.com",
        password: "hiiamloganspassword",
        apiKey: "1EEA6DC-JAM4XP2-CHVYPBN-V0XXJ9X",
        followers: 0 ,
        following: ['suha', 'isaac'],
        posts: ["post1", "post2", "post3"],
        userInfo:{
            firstName: "logan",
            lastName: "lek",
            phone: "93333333",
            address: "barbar st 69",
            city: "East side is better",
            country: "singapore"
        },
        description: "Hi guyys im loganlekleklek",
        photo: "https://via.placeholder.com/150"
    }
]

module.exports = mockUserData