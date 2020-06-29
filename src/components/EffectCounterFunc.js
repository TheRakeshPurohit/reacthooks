import React, {useState, useEffect} from 'react'

function EffectCounterFunc() {

    const initNum = 0
    const [count, setCount] = useState(initNum)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('useEffect - Updating')
        document.title =  `Clicked ${count} times.`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName( e.target.value)} />
            <button onClick={() => setCount(count + 1) }>{count} times clicked.</button>
        </div>
    )
}

export default EffectCounterFunc
