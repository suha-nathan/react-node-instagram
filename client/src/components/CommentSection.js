import React, { useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import ProfilePic from "./ProfilePic";
import Comment from "./Comment";

const CommentSection = ({ comments }) => {

    return (
        <div>
            {
                comments.map( comment => (
                    <Comment comment={comment} />
                ))
            }
        </div>
    )
}

export default CommentSection
