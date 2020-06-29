import React, {useState, useEffect} from 'react'

function EffectCounterFunc() {

    const initNum = 0
    const [count, setCount] = useState(initNum)
    useEffect(() => {
        document.title =  `Clicked ${count} times.`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1) }>{count} times clicked.</button>
        </div>
    )
}

export default EffectCounterFunc
