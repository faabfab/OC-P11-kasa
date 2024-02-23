import './../style/dropdown.scss'
import arrow from './../assets/arrow.png'

function Dropdown({ dropdownName }) {
  return (
    <div className="dropdown">
      <div>{dropdownName}</div>
      <div>
        <img src={arrow} alt="Arrow" />
      </div>
    </div>
  )
}

export default Dropdown
