import { useState } from "react";

function useCounter() {
    const [count, setCount] = useState(0);

    function incCount() {
        setCount(count + 1);
    }

    function decCount() {
        setCount(count - 1);
    }

    function resetCount() {
        setCount(0);
    }

    return [count, incCount, decCount, resetCount];
}

export default useCounter;