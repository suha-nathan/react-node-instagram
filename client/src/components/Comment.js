import React, { useState } from 'react'
import {Col, Row} from "react-bootstrap";

const Comment = ({ comment }) => {

    return (
        <Row className="border-bottom">
            <Col md={3}>
                <img src="http://placehold.it/50x50" />
            </Col>

            <Col md={9} className="text-left">
                <h6>{comment.user}</h6>
                <p>{comment.comment}</p>
            </Col>
        </Row>
    )
}

export default Comment
