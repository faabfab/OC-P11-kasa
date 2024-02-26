import arrow from './../assets/arrow.png'

function Arrow({ arrowState }) {
  return (
    <div className={arrowState}>
      <img src={arrow} alt="Arrow" />
    </div>
  )
}

export default Arrow
