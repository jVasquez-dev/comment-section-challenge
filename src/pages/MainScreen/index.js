import React, { useState } from 'react'

import { Comment } from '../../components/Comment'
import { Response } from '../../components/Response';
import data from '../../utils/data.json'

import './styles.css'

export const MainScreen = () => {

  const [commentData, setCommentData] = useState(data)
  const {comments, currentUser} = commentData

  console.log(commentData)
  return (
    <div className="container">

      {comments.map(com => {
        return (
          <React.Fragment key={com.id}>
            
              <Comment {...com} currentUser={currentUser} comments={comments} setCommentData={setCommentData}/>
            
            <div className='response-container'>
              {com.replies.map(rep => {
                return (
                  <Comment 
                      key={rep.id} 
                      commentId={com.id}
                      comments={comments} 
                      currentUser={currentUser}
                      replies = {com.replies} 
                      setCommentData={setCommentData}
                      {...rep} 
                  />
                )
                  
              })}
            </div>
          </React.Fragment>
        )
      })}
      <div className='comment-container'>
        <Response {...commentData} setCommentData={setCommentData}/>
      </div>
    </div>)

};
