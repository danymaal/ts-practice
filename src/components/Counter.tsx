import React, {FC, useState} from 'react'

const Counter: FC = () => {

    const [count, setCount] = useState(0)


    const clickHandler = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <h3>Counter</h3>
        <p>Click to add 1</p>
        <strong>{count}</strong>
        <button onClick = {clickHandler}>+</button>
    </div>
  )
}

export default Counter