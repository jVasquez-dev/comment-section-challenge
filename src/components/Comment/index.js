import React, { useState } from 'react'


import { VoteCounter } from '../VoteCounter'
import { CommentData } from '../CommentData';
import { CommentHeader } from '../CommentHeader';
import { CommentText } from '../CommentText';
import { EditText } from '../EditText';

import './styles.css'

export const Comment = ({ score, content, ...rest }) => {
  const { replyingTo } = rest

  const [edit, setEdit] = useState(false)

  return (
    <div className='comment-main'>
      <VoteCounter score={score} />
      <CommentData {...rest} />
      <CommentHeader setEdit={setEdit} {...rest} />

      {
        !edit ?
          <CommentText content={content} replyingTo={replyingTo} />
          :
          <EditText content={content} setEdit={setEdit} {...rest} />
      }
     
    </div>)
}
