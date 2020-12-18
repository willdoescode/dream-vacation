import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import './Anims.css'

export default function Anims() {
  const skiimage = useRef()
  const text = useRef()

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo([skiimage.current], {opacity: 0}, {x: '10vw', opacity: 1, delay: 1, duration: 1})
    tl.fromTo([text.current], {opacity: 0, x: '80%'}, {x: '5vw', opacity: 1, duration: 1})
  })

  return (
    <div className="Anims">
      <div className="imagecontainer">
        <img className='skiimage' ref={skiimage} src='https://media-austria-info.azureedge.net/cms-uploads-prod/default/0001/02/thumb_1591_default_three_columns.jpeg?cachebuster=1600543141' alt='img' />
      </div>
      <div ref={text} className="textcontainer">
        <h1 className='head'>Austria</h1>
        <p className="head">I love skiing in Austria,<br/>nothing can ever beat it.</p>
      </div>
    </div>
  );
}
