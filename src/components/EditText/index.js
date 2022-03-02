import React, { useState } from 'react'

import './styles.css'

export const EditText = ({commentId, content, id, setCommentData, replyingTo, setEdit, setState}) => {
  const text = replyingTo ? `@${replyingTo} ` + content : content
  const [data, setData] = useState(text)

  const handleSubmit = (e) => {
    
    e.preventDefault()

    if(commentId) {
      setState(prev => (
        {
          ...prev,
          data: {
            ...prev.data,
            comments: prev.data.comments.map(
              com => com.id !== commentId ? com : { ...com, replies: com.replies.map(rep => rep.id !== id ? rep : { ...rep, content: data })}
            )
          }
        }
      ))
    } else {
      setState(prev =>
        ({ ...prev, data: { ...prev.data, comments: prev.data.comments.map(com => com.id !== id ? com : { ...com, content: data})}})
      )
    }

    setEdit( prevState => !prevState)

  }

  const moveCaretAtEnd = (e) => {
    var temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  return (
    <form className='edit-container' onSubmit={handleSubmit}>
      <textarea autoFocus className='response-area'value={data} onChange={e => setData(e.target.value)} onFocus={moveCaretAtEnd}/>
      <button className='btn right'>UPDATE</button>
    </form>
  )
}
