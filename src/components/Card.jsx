import { Link } from 'react-router-dom'
import './../style/card.scss'

function Card({ title, cover, id }) {
  const url = 'accommodation/' + id
  return (
    <div className="card">
      <Link to={url} title={title}>
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </Link>
    </div>
  )
}

export default Card
