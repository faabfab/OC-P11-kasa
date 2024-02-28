import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useEffect } from 'react'

function Layout() {
  useEffect(() => {
    document.title = 'Kaza - location d’appartements entre particuliers'
  }, [])

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
