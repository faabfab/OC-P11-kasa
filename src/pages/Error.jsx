import React from 'react'
import { Link } from 'react-router-dom'
import '../style/error.scss'

function Error() {
  return (
    <React.StrictMode>
      <div className="error_number">404</div>
      <p className="error_p">Oups! La page que vous demandez n'existe pas.</p>
      <div className="error_link">
        <Link to={'/'}>Retourner sur la page d’accueil</Link>
      </div>
    </React.StrictMode>
  )
}

export default Error
