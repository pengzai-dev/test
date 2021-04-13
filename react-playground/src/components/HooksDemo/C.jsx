import { useCallback, useContext, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { AContext } from "./index";
function C(props, ref) {

    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} />;
}

export default forwardRef(C);
