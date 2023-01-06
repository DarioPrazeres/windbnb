import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../features/counter/counter";

export default function ControlChild() {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="addGuest-child">
            <h3>Children</h3>
            <p className="rating">Ages 2-13</p>
            <div className="control-Add">
                <button className="controls"
                    onClick={()=>dispatch(decrement())}
                >-</button>
                <p className="cityname">{count}</p>
                <button className="controls control-add"
                    onClick={()=>dispatch(increment())}
                >+</button>
            </div>
        </div>
    )
}