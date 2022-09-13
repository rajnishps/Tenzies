import { useEffect, useState } from 'react'
import Die from "./Die"
import { nanoid } from 'nanoid'

export default function App() {

  const [dice, setDice] = useState(randomNum())

  function randomNum() {
    const numbs = []
    for (let i = 0; i < 10; i++) {
      numbs.push({
        value: (Math.ceil(Math.random() * 6)),
        isHeld: false,
        id: nanoid()
      })
    }
    return (numbs)
  }

  const rollDice = () => {

    let adice: { value: number; isHeld: boolean; id: string }
    setDice(oldDice => oldDice.map(die => {
      randomNum().map(die => {
        adice = die
      })
      return die.isHeld ?
        { ...die } : adice
    }))
  }

  const holdDice = (id: string) => {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } : { ...die }
    }))
  }

  const dicesElement = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} handleClick={() => holdDice(die.id)} />)

  function compare() {
    let faceNum: number
    let win = 0
    let hello = dice.filter(die => die.isHeld === true)
    let bye = hello.filter(hello => faceNum = hello.value)
    let go = hello.filter(go => {
      if (go.value === faceNum) {
        win += 1
      }
    })
    if (win === 10) { alert('You WIN motherFucker - and yes I am not going to implement a simple reset button just refresh the page') }
  }

  compare()

  return (
    <main>
      <div className="texts">
        <h2 className='title'>Tenzies</h2>
        <h4 className='text'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h4>
      </div>
      <div className="game-container">
        {dicesElement}
      </div>
      <button
        onClick={rollDice}
        className="roll-btn">Roll</button>
    </main>
  )
}


