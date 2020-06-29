import React, {useState} from 'react'

function HookCounter() {

    const initCount = 0
    const [state, setstate] = useState(initCount)
    return (
        <div>
            {
                state
            }<br />
            <button onClick={() => setstate(initCount)}>Reset</button>
            <button onClick={() => setstate(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setstate(prevState => prevState - 1)}>Decrement</button>
        </div>
    )
}

export default HookCounter
