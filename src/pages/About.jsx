import React from 'react'
import '../style/home.scss'
import Banner from './../components/Banner'
import bannerPicture from './../assets/about_header.png'
import Dropdown from './../components/Dropdown'
import abouts from './../data/about.json'

function About() {
  return (
    <React.StrictMode>
      <Banner picture={bannerPicture} />
      <div className="dropdown_container">
        {abouts.map((about) => {
          return (
            <Dropdown
              dropdownName={about.title}
              dropdownText={about.text}
              key={about.id}
            />
          )
        })}
      </div>
    </React.StrictMode>
  )
}

export default About
