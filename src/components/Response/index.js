import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import './styles.css'

export const Response = ({ currentUser, id, comment, commentId, setState, reply}) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!e.target.content.value) {
      return
    }

    if (reply) {

      const newReply = {
        content: e.target.content.value,
        createdAt: 'today',
        id: uuidv4(),
        replyingTo: comment.user.username,
        score: 0,
        user: currentUser
      }

      if (commentId) {

        setState(prev => (
          {
            ...prev,
            data: {
              ...prev.data,
              comments: prev.data.comments.map(com => com.id !== commentId ? com : { ...com, replies: [...com.replies, newReply] })
            }
          }
        ))

      } else {
        setState(prev => (
          {
            ...prev,
            data: {
              ...prev.data,
              comments: prev.data.comments.map(com => com.id !== id ? com : { ...com, replies: [...com.replies, newReply] })
            }
          }
        ))
      }

      setState(prev => ({
        ...prev,
        activeReplies: prev.activeReplies.find(v => v === id) ? prev.activeReplies.filter(v => v !== id) : [...prev.activeReplies, id]
      }))

    } else {

      const newComment = {
        content: e.target.content.value,
        createdAt: 'today',
        id: uuidv4(),
        replies: [],
        score: 0,
        user: currentUser
      }

      setState(prev =>
        ({ ...prev, data: { ...prev.data, comments: [...prev.data.comments, newComment] } })
      )

    }

    e.target.content.value = ''
  }

  return (
    <form className='response-form' onSubmit={handleSubmit}>
      <div className='img-container'>
        <img className='profile-pic' src={require(`../../${currentUser.image.png}`)} alt='profile pic' />
      </div>
      <textarea className='comment-area' name='content' placeholder='Add a comment...' />
      <button className='btn btn-grid' type='submit'>SEND</button>
    </form>
  )
}
