import React, {useState} from "react";
import Die from './Die'
import './Dice.css'

const Dice = ({numDice=6, title='Main Game', maxVal=6}) => {
    const randomArr = Array.from( {length: numDice } )
    
    const [numbers, setNumbers] = useState( randomArr.map(n => Math.floor(Math.random() * maxVal) + 1))

    const rollDice = () => (
        setNumbers(numbers => (
            numbers.map(n => Math.floor(Math.random() * maxVal) + 1)
        ))
    )

    return (
        <div className='Dice'>
            <h2>{title}</h2>
            <div>
                {numbers.map(num => <Die val={num}/>)}
            </div>
            <button onClick={rollDice}>Roll</button>
        </div>
    )
}


export default Dice;