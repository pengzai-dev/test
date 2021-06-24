import { useCallback, useState } from "react";

export default function useTest(){
    const [a,setA] = useState(1);
    const changeA = useCallback((a2) => {
        setA(a2);
    }, []);
    const showA = useCallback(() => {
        alert(a);
    }, [a]);
    return {
        a,
        changeA,
        showA
    }
}