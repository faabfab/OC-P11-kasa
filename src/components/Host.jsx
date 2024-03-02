import './../style/accommodation.scss'

function Host({ name, picture }) {
  return (
    <div className="accommodation_infos_host">
      <h3>{name}</h3>
      <img src={picture} alt={name} />
    </div>
  )
}

export default Host
