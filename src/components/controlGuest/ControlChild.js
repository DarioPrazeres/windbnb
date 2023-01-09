import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../features/counter/counter";
import { updateTotal } from "../../features/counter/totalGuest";

export default function ControlChild(prop) {
    const countT = useSelector((state) => state.counterT.value);
    const [c, setC] = useState(countT);
    const count = useSelector((state) => state.counter.value);
    const counterAd = useSelector((state) => state.counterAd.value);
    const dispatch = useDispatch();
    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
        setC(count+counterAd)
        console.log(c)
      }, []);
    return (
        <div className="addGuest-child">
            <h3>Children</h3>
            <p className="rating">Ages 2-13</p>
            <div className="control-Add">
                <button className="controls"
                    onClick={() => {
                        dispatch(decrement())
                        dispatch(updateTotal(counterAd + count));
                    }}
                >-</button>
                <p className="cityname">{count}</p>
                <button className="controls control-add"
                    onClick={() => {
                        dispatch(increment());
                        dispatch(updateTotal(count + counterAd));
                    }}
                >+</button>
            </div>
        </div>
    )
}