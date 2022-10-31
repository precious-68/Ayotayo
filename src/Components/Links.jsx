import React from 'react'
import "./Linktreestyles.css"
import slack from "../Images/slack.png"
import git from "../Images/Icon.png"

function Links() {
  return (
    <div className='links'>
    <a href='https://twitter.com/NgoziChukwuu?t=zu57Bs4-NtM4EdFJy4ZLtg&s=09' target="_blank">Twitter Link</a>
    <a href='https://training.zuri.team/' id='btn_zuri' target="_blank">Zuri Team</a>
    <a href='http://books.zuri.team' id='books' target="_blank">Zuri Books</a>
    <a href='https://books.zuri.team/python-for-beginners?ref_id=<preciousikegbo>' id='book_python' target="_blank">Python Books</a>
    <a href='https://background.zuri.team' id='pitch' target="_blank">Background Check for Coders</a>
    <a href='https://books.zuri.team/design-rules' id='book_design' target="_blank">Design Books</a>
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
