import React from 'react'
import '../style/home.scss'
import Card from '../components/Card'
import logements from './../data/logements.json'

function Home() {
  return (
    <React.StrictMode>
      <div className="home_header">
        <div className="home_header_mask">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <div className="container">
        {logements.map((logement) => {
          return <Card title={logement.title} cover={logement.cover} />
        })}
      </div>
    </React.StrictMode>
  )
}

export default Home
