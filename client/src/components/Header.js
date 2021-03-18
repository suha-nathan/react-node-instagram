import React, { useState } from 'react'
import {Row, Col, NavLink } from 'react-bootstrap'
import ProfilePic from "./ProfilePic";

const Header = (props) => {

    return (
        <Row>
            <Col md={1} className="d-flex  justify-content-center align-items-center bg-danger">
                <div>Logo</div>
            </Col>

            <Col md={9}></Col>
            <Col md={2} className="d-flex">
                <NavLink>Home</NavLink>
                <NavLink>

                        <ProfilePic imageSource="http://placehold.it/50x50"/>

                </NavLink>
            </Col>
        </Row>
    )
}

export default Header
