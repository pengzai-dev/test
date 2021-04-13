import { useCallback, useContext, useState } from 'react';
import { AContext } from "./index";
import B from "./B";
export default function A(props) {
    const b = useContext(AContext);
    let propsHtml = [];
    for (var i in props) {
        propsHtml.push(<p>{i}:{props[i]}</p>);
    }
    return <div className="component">
        A:
        a:{props.a}<br/>
        <B b={b}></B>
        <p>这是从useContext来的b :{b}</p>
    </div>
}