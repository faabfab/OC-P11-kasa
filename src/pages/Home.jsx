import React from 'react'
import '../style/Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <React.StrictMode>
      <Header />
      <main>
        <h1>Home</h1>
      </main>
      <Footer />
    </React.StrictMode>
  )
}

export default Home
