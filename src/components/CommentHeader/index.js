import React from 'react'
import { ReactComponent as ReplyIcon } from '../../images/icon-reply.svg';
import { ReactComponent as DeleteIcon } from '../../images/icon-delete.svg';
import { ReactComponent as EditIcon } from '../../images/icon-edit.svg';

import './styles.css'

export const CommentHeader = ({ createdAt, comments, user, currentUser, id, setEdit, setCommentData, replies, ...rest }) => {
    console.log(comments)
    const { commentId } = rest

    const handleDelete = () => {

        if (commentId) {
            const updatedReplies = replies.filter(rep => rep.id !== id)
            const newComments = comments.map(com => com.id === commentId ? { ...com, replies: updatedReplies } : com)
            setCommentData(state => ({ ...state, comments: newComments }))
            return
        }

        const updatedComments = comments.filter(com => com.id !== id)
        setCommentData(state => ({ ...state, comments: updatedComments }))
    }

    return (

        <div className='header-container'>
            {currentUser.username === user.username ?
                <>
                    <div className='icon-content cursor' onClick={handleDelete}>
                        <DeleteIcon className='icon' />
                        <p className='red-text'>Delete</p>
                    </div>
                    <div
                        className='icon-content cursor'
                        onClick={() => setEdit(prevState => !prevState)}
                    >
                        <EditIcon className='icon' />
                        <p className='blue-text'>Edit</p>
                    </div>
                </>
                :
                <div className='icon-content'>
                    <ReplyIcon className='icon' />
                    <p className='blue-text'>Reply</p>
                </div>

            }
        </div>
    )
};
