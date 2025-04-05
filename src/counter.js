import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);
    function increment() {
        let newcount = count + 1;
        setCount(newcount);

    }
    function decrement() {
        let newcount = count - 1;
        setCount(newcount);

    }
    function reset() {
        setCount(0);

    }

    return (
        <>
            <div className="container">
                <h1 className="title">Counter</h1>
                <h1>{count}</h1>
                <div className="btns">
                    <button className="button1" onClick={increment}>Increment</button>
                    <button className="button2" onClick={decrement}>Decrement</button>
                    <button className="button3" onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter;