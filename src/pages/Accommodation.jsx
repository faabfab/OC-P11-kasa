import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Slider from '../components/Slider'
import './../style/accommodation.scss'
import Dropdown from '../components/Dropdown'
import Tags from '../components/Tags'
import Host from '../components/Host'
import Rating from '../components/Rating'

function Accommodation() {
  const { id } = useParams()

  const logement = logements.find((element) => element.id === id)

  if (!logement) {
    return <Navigate to="/error" />
  }
  return (
    <React.StrictMode>
      <Slider
        pictures={logement.pictures}
        title={logement.title}
        pictureIndex="0"
      />
      <div className="accommodation_infos">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="accommodation_infos2">
            <Tags tags={logement.tags} />
          </div>
        </div>
        <div className="accommodation_infos_host-rating">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="accommodation_infos3">
        <div className="dropdown_container">
          <Dropdown
            dropdownName="Description"
            dropdownText={logement.description}
          />
        </div>
        <div className="dropdown_container">
          <Dropdown
            dropdownName="Équipements"
            dropdownText={logement.equipments.map((equipement) => {
              return (
                <span key={logement.equipments.indexOf(equipement)}>
                  {equipement}
                  <br />
                </span>
              )
            })}
          />
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Accommodation
