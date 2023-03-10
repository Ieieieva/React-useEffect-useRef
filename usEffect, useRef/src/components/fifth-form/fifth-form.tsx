import { useEffect, useRef, useState } from "react"
import './fifth-form.css'

export const FifthForm = () => {
  const [count, setCount] = useState(100);
  const [text, setText] = useState('');
  const [textSize, setTextSize] = useState(16);
  const countRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    document.title = `...`;
  }, []);

  return (
    <form
      className='form fifth-form'
      onSubmit={(e) => {
        e.preventDefault()
        
      }}
    >
      <div className="counter">
        <button
        className="button"
        type="button"
        onClick={() => {
          setCount(count + 1)
          setTextSize(textSize + 1)
          if(countRef.current !== null) {
            countRef.current.style.fontSize = `${textSize}px`;
          }
        }}
        >
          +
        </button>
        <p 
          className="count-text"
          ref={countRef}>
            COUNT: {count}
        </p>
      </div>
      <div className="message">
        <input
          className="input"
          name="input"
          type="text"
          placeholder="write something..."
          value={text}
          onChange={e => {
            setText(e.target.value)
          } }
        ></input>
        {text !== '' &&
          <p>You wrote: {text}.</p>
        }
      </div>
    </form>
  )
}