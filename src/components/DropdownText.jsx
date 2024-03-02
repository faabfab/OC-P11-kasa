function DropdownText({ arrowState, dropdownText }) {
  //let classText = 'dropdown_text'
  let classText = 'wrapper'
  // return <div className={classText}>{dropdownText}</div>

  if (arrowState === 'open') {
    classText = classText + ' is-open'
  }

  return (
    <div className={classText}>
      <div>
        <div class="inner">{dropdownText}</div>
      </div>
    </div>
  )
}

export default DropdownText
