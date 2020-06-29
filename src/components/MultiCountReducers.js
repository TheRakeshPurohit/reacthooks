import React, {useReducer} from 'react'

function MultiCountReducers() {

    const initialState = 0
    const reducer = (state, action) => {
        
        switch (action) {
            case 'increment':
                return state + 1
            
            case 'decrement':
                return state - 1
            
            case 'reset':
                return initialState

            default:
                return state
        }

    }
    const [count, dispatch] = useReducer(reducer, initialState)
    const [county, dispatchy] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
                <div>{count}</div>
                <button onClick={() => {dispatch('increment')}}>Inrement</button>
                <button onClick={() => {dispatch('decrement')}}>Decrement</button>
                <button onClick={() => {dispatch('reset')}}>Reset</button>
            </div>

            <div>
            <div>{county}</div>
            <button onClick={() => {dispatchy('increment')}}>Inrement</button>
            <button onClick={() => {dispatchy('decrement')}}>Decrement</button>
            <button onClick={() => {dispatchy('reset')}}>Reset</button>
            </div>
        </div>
    )
}

export default MultiCountReducers
