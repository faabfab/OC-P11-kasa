import React from 'react'

function Banner({ text, picture }) {
  const divStyle = {
    backgroundImage: 'url(' + picture + ')',
  }

  return (
    <React.StrictMode>
      <div className="home_header" style={divStyle}>
        <div className="home_header_mask">
          <h1>{text}</h1>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Banner
