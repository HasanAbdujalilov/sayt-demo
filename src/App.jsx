import React, { useState } from 'react'
import BarberShop from './page/barber.jsx'
import AboutPage from './page/AboutPage.jsx'
import VideoPage from './page/VideoPage.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      {currentPage === 'home' ? (
        <BarberShop
          onNavigateAbout={() => setCurrentPage('about')}
          onNavigateVideo={() => setCurrentPage('video')}
        />
      ) : currentPage === 'about' ? (
        <AboutPage onBack={() => setCurrentPage('home')} />
      ) : (
        <VideoPage onBack={() => setCurrentPage('home')} />
      )}
    </>
  )
}

export default App