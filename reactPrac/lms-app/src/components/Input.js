import React, { useEffect } from "react"

const Input = React.forwardRef((_, ref) => {
    useEffect(() => {
        console.log(ref.current);
    }, [ref])

    return (
        <div>
            Input: <input ref={ref}/>
        </div>
    )
})

export default Input;