import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
const ProfilePic = ({ imageSource }) => {

    return (
        <div>
            <Image src={imageSource} className="rounded-circle"/>
        </div>
    )
}

export default ProfilePic
