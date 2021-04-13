import React, { useState, useCallback, useReducer, useMemo, useRef, useEffect, useLayoutEffect } from 'react';
const set = new Set();
function Form() {
    const [text, updateText] = useState('');
    const textRef = useRef();

    useLayoutEffect(() => {
        textRef.current = text; // Write it to the ref
    });

    const handleSubmit = useCallback(() => {
        const currentText = textRef.current; // Read it from the ref
        alert(currentText);
    }, [textRef]); // Don't recreate handleSubmit like [text] would do
    set.add(handleSubmit);
    console.log(set);
    return (
        <>
            <input value={text} onChange={e => updateText(e.target.value)} />
            <button onClick={handleSubmit} >提交</button>
        </>
    );
}

export default Form;