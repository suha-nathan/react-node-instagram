import React, { useState } from 'react'
import {Button, Card, Col} from "react-bootstrap";
import CommentSection from "./CommentSection";

const Post = ({username, post}) => {

    const [ isShowComments, setIsShowComments ] = useState(false)

    function toggleComments() {
        setIsShowComments(prevState => !prevState)
    }
    return (
        <Col md={4}>
            <Card>

                <Card.Title className="text-left my-0 d-flex pl-2 pt-2 align-items-center">
                    <h6>@{username}</h6>
                </Card.Title>
                    {!post.isTextOnly && <Card.Img src={post.image} />}
                <Card.Body>
                    <p>{post.text}</p>
                </Card.Body>
                <Button onClick={toggleComments}>Show Comments</Button>
                {
                    isShowComments && (
                        <CommentSection comments={post.comments} />
                    )

                }

            </Card>
        </Col>
    )
}

export default Post
