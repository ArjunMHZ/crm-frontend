import React from 'react'

var currentYear = new Date().getFullYear();


export const Footer = () => {
  return ( 
    <div className='text-center copy-right'>
        &copy; CRM all right reserved - {currentYear}.
    </div>
  )
}