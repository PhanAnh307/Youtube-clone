import React, { useState, useEffect } from 'react'
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png'; 
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = ({}) => {

  const {videoId} = useParams();

  const [apiData, setApiData] = useState(null);

  const [channelData, setChannelData] = useState(null);

  const [commentData, setCommentData] = useState([]);


  const fetchChannelData = async () => {
    // fetching channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))
  }
  const fetchCommentData = async () => {
    //fetching comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res => res.json()).then(data => setCommentData(data.items))
  }

  const fetchVideoData = async () => {
    // Fetching video Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
  }

  useEffect(() => {
    fetchVideoData();
  },[videoId])
  useEffect(() => {
    fetchChannelData();
  },[apiData])
  useEffect(()=> {
    fetchCommentData();
  },[videoId])

  return (
    <div className="play-video">
      {/*<video src={video1} controls autoPlay muted></video>*/}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:'Title Here'}</h3>
      <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount): '16k'} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():'1 days ago'}</p>
        <div>
          <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):'155'}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>

        </div>
      </div>
      <hr/>
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description here"}</p>
        <p>Subribe GreatStack to watch more tutorials on web developments</p>
        <hr />
        <h4>{apiData?apiData.statistics.commentCount:'120'} Comments</h4>


      {commentData.map((item, index)=>{
          return(<div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div className='comment-container'>
              <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
              <p className='comment-text'>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{item.snippet.topLevelComment.snippet.likeCount > 0?item.snippet.topLevelComment.snippet.likeCount:''}</span>
                  <img src={dislike} alt=" " />
              </div>
            </div>
          </div>
          )})}
          


      </div>
    </div>
  )
}

export default PlayVideo
