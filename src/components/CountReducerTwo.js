import React, {useReducer} from 'react'

function CountReducerTwo() {

    const initialState = {
        firstCounter: 0,
        secondCounter: 10
    }
    const reducer = (state, action) => {
        
        switch (action.type) {
            case 'increment':
                return { ...state, firstCounter: state.firstCounter + action.value}
            
            case 'decrement':
                return { ...state, firstCounter: state.firstCounter - action.value}
            
            case 'increment2':
                return { ...state, secondCounter: state.secondCounter + action.value}
            
            case 'decrement2':
                return { ...state, secondCounter: state.secondCounter - action.value}
            
            case 'reset':
                return initialState

            default:
                return state
        }

    }
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>{count.firstCounter}</div>
            <div>{count.secondCounter}</div>
            <button onClick={() => {dispatch({type: 'increment2', value: 1 })}}>Increment 1 </button>
            <button onClick={() => {dispatch({type: 'decrement2', value: 1 })}}>Decrement  1 </button>
            <button onClick={() => {dispatch({type: 'increment', value: 5  })}}>Inrement   5 </button>
            <button onClick={() => {dispatch({type: 'decrement', value: 5  })}}>Decrement  5 </button>
            <button onClick={() => {dispatch({type: 'reset'     })}}>Reset</button>
        </div>
    )
}

export default CountReducerTwo
