import React,{useState,useEffect} from 'react'

function Clock() {
    const[seconds,setseconds] = useState(0)
    const[minutes,setminutes] = useState(0)
    const[hours,sethours]     = useState(0)

    let timer;
    useEffect(()=>{
        timer = setInterval(() => {
            
            setseconds(prev=>prev+1)
            if(seconds === 59){
                setminutes(prev=>prev+1)
                setseconds(0)
            }
            if(minutes === 59){
                sethours(prev=>prev+1)
                setminutes(0)
            }

        }, 1000);

        return ()=> clearInterval(timer)

    },)

  return (
    <div className="clock">
        <span>{hours<10? `0${hours}`: hours}:</span>
        <span>{minutes<10? `0${minutes}`: minutes}:</span>
        <span>{seconds<10? `0${seconds}`: seconds}</span>

    </div>
  )
}

export default Clock