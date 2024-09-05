import { useRef, useState } from "react";

const AutoCounter = () => {
    const [count, setCount] = useState(0);
    //useRef로 id를 잡았기 때문에 
    const intervalId = useRef();

    const handleStart = () => {
        //값이 변경돼도 다시 렌더링되지 않음!(useState와 다르게)
        intervalId.current = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(intervalId.current)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default AutoCounter;