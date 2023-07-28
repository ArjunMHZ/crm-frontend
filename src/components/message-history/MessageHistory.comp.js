import React from 'react'
// import {  } from "react-bootstrap";
import "./Message-history.style.css"

export const MessageHistory = ({msg}) => {
    if(!msg) return null

  return msg.map((row, index) => 
    <div key={index} className='message-history mt-3'>
    <div className='send fw-bold text-secondary'>
        <div className='sender'>{row.messageBy}</div>
        <div className='date'>{row.date}</div>
    </div>
    <div className='message'>{row.message}</div>
    </div>
  )
   
  
}
