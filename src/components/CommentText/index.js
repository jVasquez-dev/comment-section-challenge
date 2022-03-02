import React from 'react'

import './styles.css'

export const CommentText = ({content, replyingTo}) => {

    return (
        <div className='text-container'>
            {replyingTo && <span className='blue-text'>{`@${replyingTo} `}</span>}
            <span className='gray-text'>{content}</span>
        </div>
    ) 
};
