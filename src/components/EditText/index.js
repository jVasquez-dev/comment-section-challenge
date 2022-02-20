import React, { useState } from 'react'

import './styles.css'

export const EditText = ({comments, content, id, replies, setCommentData, setEdit, ...rest}) => {

  const [data, setData] = useState(content)
  const {commentId} =  rest

  const handleSubmit = (e) => {
    
    e.preventDefault()

    if(commentId) {
      
      const updatedReplies = replies.map( rep => rep.id !== id ? rep : {...rep, content: data})
      console.log(updatedReplies)
      const newComments = comments.map( com => com.id === commentId ? {...com, replies: updatedReplies} : com )
      setCommentData( state => ({...state, comments: newComments}))
      setEdit( prevState => !prevState)
      return
    }

    const updatedComments = comments.map( com => com.id !== id ? com : {...com, content: data} )
    setCommentData( state => ({...state, comments: updatedComments}))
    setEdit( prevState => !prevState)
  }

  const moveCaretAtEnd = (e) => {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  return (
    <form className='margin-bottom' onSubmit={handleSubmit}>
      <textarea autoFocus className='response-area'value={data} onChange={e => setData(e.target.value)} onFocus={moveCaretAtEnd}/>
      <button className='btn right'>UPDATE</button>
    </form>
  )
}
