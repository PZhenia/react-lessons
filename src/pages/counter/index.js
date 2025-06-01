import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {decrement, increment} from "../../store/actions/counterAction";

export default function CounterRedux() {
    const dispatch = useDispatch();
    const { counter } = useSelector(state => state);

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    useEffect(() => {
        localStorage.setItem("counter", counter);
    }, [counter]);

    return (
        <div style={{textAlign: "center", margin: "auto", marginBottom: "20px"}}>
            <h1>Value: {counter}</h1>
            <button style={{display: 'inline-block', margin: "auto", marginRight: '10px'}} onClick={handleIncrement}>+1</button>
            <button style={{display: 'inline-block', margin: "auto"}} onClick={handleDecrement}>-1</button>
        </div>
    )
}