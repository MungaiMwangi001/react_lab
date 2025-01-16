import React,{useState,useEffect} from "react";



function DigitalClock(){
    const[time,setTime] = useState(new Date())
    
    useEffect(() => {
        const intervalid  = setInterval(() => {
            setTime(new Date());
            
        }, 1000);
        return () => {
            clearInterval(intervalid)
        }
    }, [])
    function diplayTIme(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let sec = time.getSeconds();
        let meridian = hours >= 12 ? 'PM': 'AM'

        hours = (hours %12) || 12;
        return(`${PadZero(hours)}:${PadZero(minutes)}: ${PadZero(sec)} ${meridian}`)
    }

    function PadZero(number){
        return (number < 10 ? "0" :"") + number
    }
    return(
        <div className="clock-container">
    
        <span className="clock">{diplayTIme()}</span>
        </div>
    )
}

export default DigitalClock;