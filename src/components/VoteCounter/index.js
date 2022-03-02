import './styles.css'

export const VoteCounter = ({ id, setState, score, commentId }) => {

  const handleScore = (points) => {

    !commentId
      ? setState(prev =>
        ({ ...prev, data: { ...prev.data, comments: prev.data.comments.map(com => com.id !== id ? com : { ...com, score: points }) } })
      )
      : setState(prev => (
        {
          ...prev,
          data: {
            ...prev.data,
            comments: prev.data.comments.map(com => com.id !== commentId ? com : { ...com, replies: com.replies.map(rep => rep.id !== id ? rep : { ...rep, score: points }) })
          }
        }
      ))
  }

  return (
    <div className='vote-container'>
      <div className='controls'>
        <button
          className='plain-button top-button'
          onClick={() => handleScore(score + 1)}
        >
          +
        </button>
        <p className='score'>{score}</p>
        <button
          className='plain-button bottom-button'
          onClick={() => handleScore(score - 1)}
        >
          -
        </button>
      </div>
    </div>
  )
};
