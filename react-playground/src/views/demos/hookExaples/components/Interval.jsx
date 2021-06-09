import { useState } from "react";
import useInterval from "../hooks/useInterval";
import {
    Card,
    CardHeader,
    CardBody,
    Button
} from "shards-react";
export default function CountDown() {
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(null);
    const addOne = () => {
        setCount(count + 1);
    };
    useInterval(addOne, delay);
    return <Card style={{ maxWidth: "100%" }}>
        <CardHeader>useInterval</CardHeader>
        <CardBody>
            <p>{count}</p>
            <Button onClick={() => { setDelay(delay ? null : 1000) }}>{delay ? "暂停" : "开始"}</Button>
        </CardBody>
    </Card>

}