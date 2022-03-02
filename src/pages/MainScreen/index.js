import React, { useState } from 'react'

import { Comment } from '../../components/Comment'
import { Modal } from '../../components/Modal';
import { Response } from '../../components/Response';
import importedData from '../../utils/data.json'

import './styles.css'

export const MainScreen = () => {

  const [state, setState] = useState({
    data: { ...importedData, comments: importedData.comments.sort((a, b) => b.score - a.score) },
    activeReplies: [],
    activeComment: {
      reply: false,
      id: 0
    }
  })

  const { data, activeReplies } = state
  const { comments, currentUser } = data
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="container">
      {comments.map(com => {
        return (
          <React.Fragment key={com.id}>
            <Comment
              comments={comments}
              currentUser={currentUser}
              setOpenModal={setOpenModal}
              setState={setState}
              {...com}
            />
            {
              activeReplies.find(id => id === com.id) &&
              <Response
                id={com.id}
                comment={com}
                currentData={state.activeComment}
                currentUser={currentUser}
                reply={true}
                setState={setState}
              />
            }
            <div className='reply-container'>
              {com.replies.map(rep => {
                return (
                  <React.Fragment key={rep.id}>
                    <Comment
                      commentId={com.id}
                      comments={comments}
                      currentUser={currentUser}
                      replies={com.replies}
                      setState={setState}
                      setOpenModal={setOpenModal}
                      {...rep}
                    />
                    {
                      activeReplies.find(id => id === rep.id) &&
                      <Response
                        id={rep.id}
                        currentData={state.activeComment}
                        comment={com}
                        commentId={com.id}
                        currentUser={currentUser}
                        reply={true}
                        setState={setState}
                      />
                    }
                  </React.Fragment>
                )
              })}
            </div>
          </React.Fragment>
        )
      })}
      <div className='comment-container'>
        <Response
          currentData={state.activeComment}
          currentUser={currentUser}
          reply={false}
          setState={setState}
        />
      </div>
      {openModal &&
        <Modal
          currentData={state.activeComment}
          setState={setState}
          setOpenModal={setOpenModal}
        />
      }
    </div>)

};
