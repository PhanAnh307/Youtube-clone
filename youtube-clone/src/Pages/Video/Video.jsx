import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {

  const {videoId,categoryId} = useParams()

  return (
    <div className='play-container'>
        <div className='child1'><PlayVideo videoId ={videoId}/></div>
        <div className='child2'><Recommended categoryId={categoryId}/></div>
    </div>
  )
}

export default Video
