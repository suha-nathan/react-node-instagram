import React, { useState } from 'react'
import ProfilePic from "./ProfilePic";
import {Button} from "react-bootstrap";

const Sidebar = ( { userData } ) => {

    let { username, firstName, lastName, description, posts, following} = userData
    console.log(userData)
    return (
        <div className="text-left">
            <ProfilePic imageSource="https://placehold.it/200x200"/>
            <p>{firstName} {lastName}</p>
            <p>@{username}</p>
            <div>
                <Button>Follow</Button>
                <Button>Unfollow</Button>
            </div>
            <div>
                {description}
            </div>

            <div>
                <p>{posts.length} posts</p>
                <p>{following.length} following</p>
            </div>
        </div>
    )
}

export default Sidebar
