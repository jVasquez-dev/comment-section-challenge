import React from 'react'

import './styles.css'

export const CommentData = ({user, createdAt, currentUser}) => {
    return (
        <div className='user-data'>
            <img className='profile-pic' src={require(`../../${user.image.png}`)} alt='profile pic' />
            <p className='header-element'>{user.username}</p>
            {currentUser.username === user.username && <p className='text-bg-blue'>you</p>}
            <p className='header-element gray-text'>{createdAt}</p>
        </div>
    )
}
