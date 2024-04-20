import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'    
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import trophy from '../../assets/trophy.png'
import games from '../../assets/games.png'
import musical from '../../assets/musical-note.png'
import fire from '../../assets/fire.png'
import playlist from '../../assets/playlist.png'
import short from '../../assets/short.png'

const Sidebar = ({sidebar, category, setCategory}) => {
    
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="sortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={() => setCategory(0)}>
            <img src={home} alt="" /><p>Trang chủ</p>
        </div>
        <div className={`side-link ${category===100?"active":""}`} onClick={() => setCategory(100)} >
            <img src={short} alt="" /><p>Shorts</p>
        </div>
        <div className={`side-link ${category===200?"active":""}`} onClick={() => setCategory(200)}>
            <img src={playlist} alt="" /><p>Kênh đăng ký</p>
        </div>
        <hr/>
      </div>
        <div className="subscribed-list">
            <h3>Kênh đăng ký</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>PewDiePie</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" /><p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>Justin Bieber</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>5-Minute Crafts</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>
            <hr/>
        </div>

        <div className="discover">
            <h3>Discover</h3>
            <div className={`side-link ${category===1?"active":""}`} onClick={() => setCategory(1)}>
                <img src={fire} alt="" /><p>Khám phá</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={() => setCategory(10)}>
                <img src={musical} alt="" /><p>Âm nhạc</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={() => setCategory(20)}>
                <img src={games} alt="" /><p>Games</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={() => setCategory(25)}>
                <img src={news} alt="" /><p>Tin tức</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={() => setCategory(17)}>
                <img src={trophy} alt="" /><p>Thể thao</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
