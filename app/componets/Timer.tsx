import { useState , useEffect } from "react"

export default function TimerWidget (){

    const [currTime, setCurrTime] = useState(new Date ().toLocaleDateString())

    useEffect(() => {
        const interval = setInterval(()=> {
            setTimeout( new Date().toLocaleDateString());
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            {currTime}
        </div>
    )
}