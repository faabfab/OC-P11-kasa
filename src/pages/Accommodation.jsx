import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Slider from '../components/Slider'
import './../style/accommodation.scss'

function Accommodation() {
  const { id } = useParams()
  const logement = logements.find((element) => element.id === id)
  return (
    <React.StrictMode>
      <Slider pictures={logement.pictures} title={logement.title} />
      <div>
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div>
          <h3>{logement.host.name}</h3>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Accommodation
