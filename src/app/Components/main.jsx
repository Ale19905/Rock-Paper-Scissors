'use client'
import { useEffect, useRef, useState } from 'react'
import Score from './Score'
import useWinner from '../Hooks/useWinner'

export default function Main() {

  const [selected, setSelected] = useState(null)
  const [selectedimg, setSelectedimg] = useState('')
  
  const [selectedColor, setSelectedColor] = useState(null)
  const [CPUColor, setCPUColor] = useState(null)
  
  
  const [CPUselected, setCPUselected] = useState()
  
  const [CPUselectedimg, setCPUSelectedimg] = useState(null)
  const {winner, GetWinner,CPU, myScore, CPUScore, handleRestart} = useWinner(selected, CPUselected)
  
  
  useEffect(() => { 
    //setCPUselected(jugar())
    GetWinner(selected, jugar())
    
  },[selected])

  function handlePapel(){
    setSelected('papel')
    setSelectedimg('/icon-paper.svg')
    setSelectedColor('blue')
  }
  function handlePiedra(){
    setSelected('piedra')
    setSelectedimg('/icon-rock.svg')
    setSelectedColor('red')
    
  }
  function handletijera(){
    setSelected('tijera')
    setSelectedimg('/icon-scissors.svg')
    setSelectedColor('yellow')
    
  }

  function jugar() {
    var opciones = ['piedra', 'papel', 'tijera'];
    var indice = Math.floor(Math.random() * opciones.length);
    
    if(opciones[indice] === 'piedra'){
      setCPUSelectedimg('/icon-rock.svg')
      setCPUColor('red')
    }else if(opciones[indice] === 'papel'){
      setCPUSelectedimg('/icon-paper.svg')
      setCPUColor('blue')
    }else{
      setCPUSelectedimg('/icon-scissors.svg')
      setCPUColor('yellow')
    }

    return opciones[indice];
  }

  function handlePlayAgain(){
    setSelected(null)
  
    
  }

  
  return(
    <>
      
        <div className='head'>
          <img className='logo' src="/logo.svg" alt="ROCK PAPER SCISSORS" />
          <Score myScore={myScore} cpuScore={CPUScore}></Score>
        </div>


        {selected 
        ? <div className='container'>  
            <h1>{winner}</h1>

            <div className='winner_field'>
              <div className='winner_subField'>
                
                <p>You Picked: {selected}</p>
                <div className='Choosen_div' style={{borderColor: `${selectedColor}`}}>
                  <img className='Choosen' src={selectedimg} alt={selected} />
                </div>
              </div>
              <div className='winner_subField' >
                <p>CPU Picked: {CPU}</p>
                <div className='Choosen_div' style={{borderColor: `${CPUColor}`}}>
                  <img className='Choosen' src={CPUselectedimg} alt={CPUselected} />

                </div>
              </div>

            </div>
                <div className='action-btns'>
                  <button className='playAgain-btn' onClick={handlePlayAgain}>Play Again</button>
                  <button className='playAgain-btn' onClick={handleRestart}>Restart Score</button>
                </div>
            

          </div>  
        : <div className='select_field'>
            
            
            <button className='btns piedra' onClick={handlePiedra}>
              <img src="\icon-rock.svg" alt="piedra" />
            </button>
            <button className='btns papel' onClick={handlePapel}>
              <img src="\icon-paper.svg" alt="papel" />
            </button>
            <button className='btns tijera' onClick={handletijera}>
              <img src="\icon-scissors.svg" alt="tijera" />
            </button>
          </div>

    }





      </>
    )
}