import React from 'react'

import './styles.css'

export const Response = ({ currentUser, comments, setCommentData }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!e.target.content.value){
      return
    }
    const newComment = {
      content: e.target.content.value,
      createdAt: 'today',
      id: 10,
      replies: [],
      score: 0,
      user: currentUser
    }

    setCommentData({
      comments:[...comments, newComment],
      currentUser: currentUser
    })

    e.target.content.value = ''
  }
  
  return (
    <div className='resp-container'>
      <div className='vote-container'>
        <img className='profile-pic' src={require(`../../${currentUser.image.png}`)} alt='profile pic' />
      </div>
      <form className='response-form' onSubmit={handleSubmit}>
        <textarea className='comment-area' name='content' placeholder='Add a comment...' />
        <button className='btn' type='submit'>SEND</button>
      </form>
    </div>
  )
}
