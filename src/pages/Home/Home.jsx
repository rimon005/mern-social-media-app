import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <div className="postSide">Post </div>
        <div className="rightSide">right</div>
    </div>
  )
}

export default Home
