import React from 'react'

import { Comment } from '../../components/Comment'
import data from '../../utils/data.json'

import './styles.css'

export const MainScreen = () => {

  return (<div className="container">
    {data.comments.map(com => {
      console.log(com)
      return <Comment key={com.id} username={com.user.username} />
    })}
  </div>)

};
