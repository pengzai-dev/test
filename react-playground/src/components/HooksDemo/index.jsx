//index->A->B
import A from "./A";
import C from "./C";
import React, { useState, useCallback, useReducer, useMemo, useRef, useEffect,useLayoutEffect } from 'react';
import Counter from './Counter';
import ScrollView from './ScrollView';
import Form from './Form';
export const AContext = React.createContext();

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'reset':
            return { count: action.payload };
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            // A reducer must always return a valid state.
            // Alternatively you can throw an error if an invalid action is dispatched.
            return state;
    }
}


export default function HooksDemo({ initialCount }) {
    const [state, dispatch] = useReducer(
        reducer,
        initialState,
        function () {
            return { count: initialCount }
            // dispatch({ type: 'reset', payload: initialCount });
        }
    );
    
    const [b, setb] = useState(2);
    const [a, seta] = useState(1);
    useLayoutEffect(() => {
        console.log('layout subscribe');
        return () => {
            // Clean up the subscription
            console.log('layout unsubscribe');
        };
    },[a,b]);

    useEffect(() => {
        console.log('effect subscribe');
        return () => {
            // Clean up the subscription
            console.log('effect unsubscribe');
        };
    },[a,b]);

    function jisuan() {
        console.log('jisuan');
        return a + b;
    }
    const c = useMemo(() => jisuan(), [a, b]);
    const fancyInputRef = useRef();
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        fancyInputRef.current.focus();
    };
    const [row,setRow] = useState(1);
    return <div className="component">
        <AContext.Provider value={b}>
            <A a={a} ></A>
        </AContext.Provider>
        <button onClick={() => { seta(a + 1) }}>a+1</button>
        <button onClick={() => { setb(b + 1) }}>b+1</button>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
            Reset
        </button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <C ref={fancyInputRef}></C>
        <button onClick={onButtonClick}>Focus the input</button>
        <Counter></Counter>
        <ScrollView row={row}></ScrollView>
        <button onClick={()=>{
            setRow(row+1);
        }}>row+1</button>
        <button onClick={()=>{
            setRow(row-1);
        }}>row-1</button>
        <Form></Form>
    </div>
}