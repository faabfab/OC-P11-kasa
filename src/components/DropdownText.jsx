function DropdownText({ arrowState, dropdownText }) {
  const classText = 'dropdown_text_' + arrowState
  return <div className={classText}>{dropdownText}</div>
}

export default DropdownText
