import './../style/dropdown.scss'
import { useState } from 'react'
import Arrow from './Arrow'
import DropdownText from './DropdownText'

function Dropdown({ dropdownName, dropdownText }) {
  const [status, setStatus] = useState('close')

  function dropdownEvent(id) {
    if (status === 'close') {
      setStatus('open')
    }
    if (status === 'open') {
      setStatus('close')
    }
  }

  return (
    <div className="dropdown">
      <div className="dropdown_button" onClick={dropdownEvent}>
        <div>{dropdownName}</div>
        <Arrow arrowState={status} />
      </div>
      <DropdownText arrowState={status} dropdownText={dropdownText} />
    </div>
  )
}

export default Dropdown
