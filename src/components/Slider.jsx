import './../style/slider.scss'

function Slider({ pictures, title }) {
  return (
    <div className="slider">
      <img src={pictures[0]} alt={title} />
    </div>
  )
}

export default Slider
