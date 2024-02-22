import React from 'react'
import { useParams } from 'react-router-dom'

function Location() {
  const { id } = useParams()
  return (
    <React.StrictMode>
      <h1>Location {id}</h1>
    </React.StrictMode>
  )
}

export default Location
