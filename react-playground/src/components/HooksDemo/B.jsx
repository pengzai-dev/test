import { useCallback, useContext, useState } from 'react';
import { AContext } from "./index";
export default function B(props) {
    const b1 = useContext(AContext);
    
    let propsHtml = [];
    for (var i in props) {
        propsHtml.push(<p>{i}:{props[i]}</p>);
    }
    return <div className="component">
        B:<br/>
        这是从props来的b :{props.b}<br/>
        这是从useContext来的b :{b1}
    </div>
}