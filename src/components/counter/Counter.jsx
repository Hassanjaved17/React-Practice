// import React from 'react'
import Botton from "../buttons/Button"
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center gap-2">
                <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
                <div className="flex justify-center gap-4">
                    <Botton title="increment" onClick={() => setCount(count + 1)} />
                    <Botton title="decrement" onClick={() => setCount(count - 1)} />
                </div>
            </div>
        </>
    )
}

export default Counter