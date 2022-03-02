import React from 'react'

import './styles.css'

export const Modal = ({ setOpenModal, currentData, setState }) => {

    const { commentId, id} = currentData

    const handleDelete = () => {

        if (commentId) {
            setState(prev => (
                {
                    ...prev,
                    data: {
                        ...prev.data,
                        comments: prev.data.comments.map(
                            com => com.id !== commentId ? com : { ...com, replies: com.replies.filter(rep => rep.id !== id) }
                        )
                    }
                }
            ))
        } else {
            setState(prev =>
                ({ ...prev, data: { ...prev.data, comments: prev.data.comments.filter( com => com.id !== id)}})
              )
        }

        setOpenModal(false)
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <p className='title'>Delete Comment</p>
                <p className='gray-text margin-30'>Are you sure you want to delete this comment? This will remove the
                    comment and can't be undone.
                </p>
                <div className='flex-container'>
                    <button
                        className='btn-big bg-gray'
                        onClick={() => setOpenModal(false)}>
                        NO, CANCEL
                    </button>
                    <button
                        className='btn-big bg-red'
                        onClick={handleDelete}>
                        YES, DELETE
                    </button>
                </div>
            </div>
        </div>
    )
}
