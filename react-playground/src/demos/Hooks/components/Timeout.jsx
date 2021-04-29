import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Button
} from "shards-react";
export default function Timeout(props) {
    const ms = props.ms || 5000;
    const [isReady, setIsReady] = useState(false);
    let timer = setTimeout(() => {
        setIsReady(true);
    }, ms);

    const cancel = () => {
        clearTimeout(timer);
    };
    
    useEffect(() => {
        return () => {
            clearTimeout(timer);
        }
    });
    return <Card style={{ maxWidth: "100%" }}>
        <CardHeader>useTimeout</CardHeader>
        <CardBody>
            <p>{isReady ? 'I\'m reloaded after timeout' : `I will be reloaded after ${ms / 1000}s`}</p>
            {isReady === false ? <Button onClick={cancel}>Cancel</Button> : ''}
        </CardBody>
    </Card>
}