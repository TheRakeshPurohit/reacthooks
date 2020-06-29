import React, {useState, useEffect} from 'react'

function HookMouse() {

const [X, setX] = useState(0)
const [Y, setY] = useState(0)

const logMousePosition = e => {
    console.log('logging')
    setX(e.clientX)
    setY(e.clientY)
}

useEffect(() => {
    console.log('useEffect called.')
    window.addEventListener('mousemove', logMousePosition)

},[])

    return (
        <React.Fragment>
            Hooks<br />
            x - {X} <br />
            y - {Y} <br />
        </React.Fragment>
    )
}

export default HookMouse
