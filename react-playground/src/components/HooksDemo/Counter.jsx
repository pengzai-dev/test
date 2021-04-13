import React, { useState, useCallback, useReducer, useMemo, useRef, useEffect, useLayoutEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();
    useEffect(() => {
        prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;
    return <> <h1>Now: {count}, before: {prevCount}</h1> <button onClick={() => { setCount(count + 1) }}>count+1</button></>;
}
export default Counter;