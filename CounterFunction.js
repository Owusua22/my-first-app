import React, {useState} from 'react';

const CounterFunction = () => {
    const [count, handleUpdate] = useState({number :0})
    return (
        <div>
            <h1>Counter: {count.number}</h1>
            <hr />
            <button onClick={() => handleUpdate({ number: count.number + 1})}>Increase Count</button>
            <button onClick={() => handleUpdate({ number: count.number - 1})}>decrease Count</button>

        </div>
    );
}

export default CounterFunction;
