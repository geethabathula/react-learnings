import useCounter from "./useCounter";

export default function Counter2() {

    const [count, incCount, decCount, resetCount] = useCounter();

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={incCount}>Increase</button>
            <button onClick={decCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}