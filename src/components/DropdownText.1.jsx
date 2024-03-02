export function DropdownText({ arrowState, dropdownText }) {
  //let classText = 'dropdown_text'
  let classText = 'dropdown2'
  // return <div className={classText}>{dropdownText}</div>
  if (arrowState === 'open') {
    classText = classText + ' is-open'
  }

  return (
    (
      <div class="wrapper">
        <div>
          <div class="inner">Expandable content</div>
        </div>
      </div>
    ),
    (<div className={classText}>{dropdownText}</div>)
  )
}
