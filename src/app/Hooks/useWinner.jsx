'use client'
import { useEffect, useState } from "react";

export default function useWinner(selected, CPUselected){
    const [winner, setWinner] = useState(null)
    const [CPU, setCPU] = useState()
    
    const [myScore, setMyScore] = useState(JSON.parse(localStorage.getItem('myscore')) || 0)
    const [CPUScore, setCPUScore] = useState(JSON.parse(localStorage.getItem('cpuscore')) || 0)

    useEffect(() => {
        localStorage.setItem('myscore', JSON.stringify(myScore))
        localStorage.setItem('cpuscore', JSON.stringify(CPUScore))
    }, [myScore, CPUScore])

    function GetWinner(selected, CPUselected) {
        console.log(selected, CPUselected);
        setCPU(CPUselected)
        //setCPU(CPUselected)
        if (selected === 'piedra' && CPUselected === 'papel') {
          console.log('CPU WINS')
          setWinner('CPU WINS')
          setCPUScore(CPUScore+1)
        }else if(selected === 'piedra' && CPUselected === 'tijera'){
          console.log('YOU WIN');
          setWinner('YOU WIN')
          setMyScore(myScore+1)
        }else if(selected === 'piedra' && CPUselected === 'piedra'){
          console.log('DRAW');
          setWinner('DRAW')
        }
      
        if (selected === 'papel' && CPUselected === 'tijera') {
          console.log('CPU wins')
          setWinner('CPU WINS')
          setCPUScore(CPUScore+1)
        }else if(selected === 'papel' && CPUselected === 'piedra'){
          console.log('You win');
          setWinner('YOU WIN')
          setMyScore(myScore+1)
        }else if(selected === 'papel' && CPUselected === 'papel'){
          console.log('DRAW');
          setWinner('DRAW')
        }
      
        if (selected === 'tijera' && CPUselected === 'piedra') {
          console.log('CPU wins')
          setWinner('CPU WINS')
          setCPUScore(CPUScore+1)
        }else if(selected === 'tijera' && CPUselected === 'papel'){
          console.log('You win');
          setWinner('YOU WIN')
          setMyScore(myScore+1)
        }else if(selected === 'tijera' && CPUselected === 'tijera'){
          console.log('DRAW');
          setWinner('DRAW')
        }
      
      }

      function handleRestart(){
        setMyScore(0)
        setCPUScore(0)
        console.log('restarted');
      }

      return {
        winner,
        GetWinner,
        CPU,
        myScore,
        CPUScore,
        handleRestart
      }
}