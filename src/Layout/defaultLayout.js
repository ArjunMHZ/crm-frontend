import React from 'react'
import { Header } from './Partials/Header.comp'
import { Footer } from './Partials/Footer.comp'
import { Outlet } from "react-router-dom";

export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header'>
           <Header />
        </header>
        <main className='main'>
            <Outlet />
           {children}
        </main>
        <footer className='footer'>
           <Footer />
        </footer>
        
    </div>
  )
}
