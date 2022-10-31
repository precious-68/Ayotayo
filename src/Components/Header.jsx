import React from 'react'
import "./Linktreestyles.css"

import profile from "../Images/Snapchat-680063175 (2).jpg"
import share from "../Images/_Avatar share button (1).png"
import sharebtn from "../Images/_Avatar share button.png"

function Header() {
  return (
    <div className='body'>
    <div className='header'>
    <img  id='profile_img' src={profile} alt="profile-img"/>
      <h4 id='twitter'>Ngozi</h4>
      <h4 id='slack'>precious ikegbo</h4>
      <div className='avatar'>
      <img className= "avatar-sharearrow" src={share}   alt='avatar share'/>
      <img className= "avatar-sharebtn" src={sharebtn}   alt='avatar share'/>
      </div>
      
    </div>
    </div>
  )
}

export default Header
