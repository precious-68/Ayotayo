import React from 'react'
import "./Linktreestyles.css"
import slack from "../Images/slack.png"
import git from "../Images/Icon.png"

function Links() {
  return (
    <div className='links'>
    <a href='https://twitter.com/NgoziChukwuu?t=zu57Bs4-NtM4EdFJy4ZLtg&s=09' id=''>Twitter Link</a>
    <a href='https://training.zuri.team/' id='btn_zuri'>Zuri Team</a>
    <a href='http://books.zuri.team' id='books'>Zuri Books</a>
    <a href='https://books.zuri.team/python-for-beginners?ref_id=<preciousikegbo>' id='book_python'>Python Books</a>
    <a href='https://background.zuri.team' id='pitch'>Background Check for Coders</a>
    <a href='https://books.zuri.team/design-rules' id='book_design'>Design Books</a>
       <div className='icons'>
       <div className='social-icons'>
       <img src={slack} alt='slack icon'/>
       <img src={git} alt="git icon"/>
       </div>
     
       </div>

      
      
    </div>
  )
}

export default Links
