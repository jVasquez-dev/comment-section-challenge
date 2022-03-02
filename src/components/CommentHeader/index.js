import React from 'react'
import { ReactComponent as ReplyIcon } from '../../images/icon-reply.svg';
import { ReactComponent as DeleteIcon } from '../../images/icon-delete.svg';
import { ReactComponent as EditIcon } from '../../images/icon-edit.svg';

import './styles.css'

export const CommentHeader = ({commentId, setOpenModal, user, currentUser, id, setEdit, setState}) => {

    const handleDelete = () => {
        setState( prev => ({
            ...prev,
            activeComment: {
                commentId,
                id
            }
        }))
        setOpenModal(true)
    }

    const handleReply = () => {
        setState( prev => ({
            ...prev,
            activeReplies: prev.activeReplies.find( v => v === id ) ? prev.activeReplies.filter( v => v !== id) : [...prev.activeReplies, id]
        }))
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
                <div className='icon-content cursor' onClick={handleReply}>
                    <ReplyIcon className='icon' />
                    <p className='blue-text'>Reply</p>
                </div>
            }
        </div>
    )
};