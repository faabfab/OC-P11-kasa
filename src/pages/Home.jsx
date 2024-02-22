import React from 'react'
import '../style/home.scss'
import Card from '../components/Card'
import logements from './../data/logements.json'
import Banner from '../components/Banner'

function Home() {
  return (
    <React.StrictMode>
      <Banner />
      <div className="container">
        {logements.map((logement) => {
          return (
            <Card
              title={logement.title}
              cover={logement.cover}
              id={logement.id}
              key={logement.id}
            />
          )
        })}
      </div>
    </React.StrictMode>
  )
}

export default Home
