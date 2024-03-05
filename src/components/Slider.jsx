import './../style/slider.scss'
import arrowBack from './../assets/arrow_back.png'
import arrowForward from './../assets/arrow_forward.png'
import { useState } from 'react'

function Slider({ pictures, title, pictureIndex }) {
  const picturesNumber = pictures.length

  const [indexSlider, setIndexSlider] = useState(Number(pictureIndex))

  if (picturesNumber === 1) {
    return (
      <div className="slider">
        <img src={pictures[indexSlider]} alt={title} />
      </div>
    )
  }

  function pictureBack() {
    if (indexSlider > 0) {
      setIndexSlider(indexSlider - 1)
    } else {
      setIndexSlider(pictures.length - 1)
    }
  }

  function pictureForward() {
    if (indexSlider > pictures.length - 2) {
      setIndexSlider(0)
    } else {
      setIndexSlider(indexSlider + 1)
    }
  }

  return (
    <div className="slider">
      <img src={pictures[indexSlider]} alt={title} />
      <div className="slider_counter">
        {indexSlider + 1} / {picturesNumber}
      </div>
      <div className="slider_arrows">
        <div className="slider_arrows_back" onClick={pictureBack}>
          <img src={arrowBack} alt="Précédent" />
        </div>
        <div className="slider_arrows_forward" onClick={pictureForward}>
          <img src={arrowForward} alt="Suivant" />
        </div>
      </div>
    </div>
  )
}

export default Slider
