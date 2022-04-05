import { useState } from 'react'
import './styles.css'

export const VoteCounter = ({ id, setState, score, commentId }) => {

  const [currentVotes, setCurrentVotes] = useState( () => ({
    vote: 0,
    score: score,
  }))

  

  const handleScore = (type) => {

    const newVote = currentVotes.vote === type ? 0 : type
    
    setCurrentVotes({...currentVotes, vote: newVote})

    !commentId
      ? setState(prev =>
        ({ ...prev, data: { ...prev.data, comments: prev.data.comments.map(com => com.id !== id ? com : { ...com, score: currentVotes.score + newVote }) } })
      )
      : setState(prev => (
        {
          ...prev,
          data: {
            ...prev.data,
            comments: prev.data.comments.map(com => com.id !== commentId ? com : { ...com, replies: com.replies.map(rep => rep.id !== id ? rep : { ...rep, score: currentVotes.score + newVote }) })
          }
        }
      ))
  }

  return (
    <div className='vote-container'>
      <div className='controls'>
        <button
          className={`plain-button top-button ${currentVotes.vote === 1 && 'active'}`}
          onClick={() => handleScore(1)}
        >
          +
        </button>
        <p className='score'>{score}</p>
        <button
          className={`plain-button bottom-button ${currentVotes.vote === -1 && 'active'}`}
          onClick={() => handleScore(-1)}
        >
          -
        </button>
      </div>
    </div>
  )
};
