import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment} from '../slice/counterSlice';

function Counter() {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState();
  return (
    <>
        <input onChange={(e) => {setIncrementAmount(parseInt(e.target.value))}}/>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment(incrementAmount))}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Counter