import React, { useState } from 'react'


import { VoteCounter } from '../VoteCounter'
import { CommentData } from '../CommentData';
import { CommentHeader } from '../CommentHeader';
import { CommentText } from '../CommentText';
import { EditText } from '../EditText';

import './styles.css'

export const Comment = ({ content, commentId, id, replyingTo, score, setState, ...rest }) => {

  const [edit, setEdit] = useState(false)

  return (
    <div className='comment-main'>
      <VoteCounter commentId={commentId} id={id} setState={setState} score={score} />
      <CommentData {...rest} />
      <CommentHeader id={id} commentId={commentId} setEdit={setEdit} setState={setState} {...rest} />
      {
        !edit ?
          <CommentText content={content} replyingTo={replyingTo} />
          :
          <EditText commentId={commentId} content={content} id={id} replyingTo={replyingTo} setEdit={setEdit} setState={setState} {...rest} />
      }
    </div>)
}
