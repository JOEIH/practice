//Counter 컴포넌트의 기능
//1. 증감되는 기능
//2. 부모컴포넌트에 메세지 전달하는 기능
import { useState } from "react"
import PropTypes from "prop-types"


function Counter({onIncrease, onDecrease}) {
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)
        if(onIncrease) onIncrease(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
        if(onDecrease) onDecrease(count - 1)
    }

    return (
        <div style={{fontSize: "40px"}}>
            {count}<br />
            {/* 이벤트 바인딩 */}
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

Counter.propTypes = {
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func
}

export default Counter;