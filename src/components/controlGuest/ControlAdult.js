import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAdult, decrementAdult, incrementByAmount } from "../../features/counter/counterAdult";

export default function ControlAdult() {
    const count = useSelector((state) => state.counterAd.value);
    const dispatch = useDispatch();
    return (
        <div className="addGuest">
            <h3>Adults</h3>
            <p className="rating">Ages 13 or above</p>
            <div className="control-Add">
                <button className="controls"
                onClick={()=>dispatch(decrementAdult())}>-</button>
                <p className="cityname">{count}</p>
                <button className="controls control-add" 
                    onClick={()=>dispatch(incrementByAmount(count, 3))}
                >+</button>
            </div>
        </div>
    )
}