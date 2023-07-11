import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const answer = useRef()
  const hints = ['พี่เป็นผู้ชาย', 'พี่ใส่แว่น', 'ชื่อพี่เป็นตัวอักษรภาษาอังกฤษ']
  const [bonus, setBonus] = useState(false)
  const [incorrect, setIncorrect] = useState(false)
  const eventAnswer = () => {
    if (answer.current.value === "supawit") {
      setBonus(true)
      setIncorrect(false)
    } else {
      setIncorrect(true)
    }
  }
  return (
    <div>
      <h1>Hello Nong Rahut</h1>
      <p>This is hints and question for you.</p>
      <button>Question</button>
      <hr />
      <div className="container">
        {hints.map((hint, index) => {
          return (
            <div className='box'>
              Hint{index + 1} : {hint}
            </div>
          )
        })}
      </div>
      <hr />
      <div className='box container'>
        <p>Question : มีข้อเดียว ตอบได้อาจจะรู้ตัวพี่ได้เลย (อย่าลืมจดคำตอบไว้ด้วยนะครับ)</p>
        <div className='question-inner'>
          <p>if sha256 = 8f2d3c8d43e63e05693de793a8e611013fe63231cadfc039082abfe2711ed36b</p>
          <p>then text = ?</p>
        </div>
        <br />
        <div>
          {bonus && <p className='correct'>Your answer is correct!</p>}
          {bonus && <button><a href="https://www.instagram.com/im_________j">Final Hint!</a></button>}
          {incorrect && <p className='incorrect'>Your answer is incorrect!</p>}
        </div>
        <label htmlFor="">Answer : </label>
        <input type="text" ref={answer} />
        <button onClick={() => eventAnswer()}>Submit</button>
      </div>
    </div>
  )
}

export default App
