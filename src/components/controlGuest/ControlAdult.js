import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAdult, decrementAdult, incrementByAmount } from "../../features/counter/counterAdult";
import { updateTotal } from "../../features/counter/totalGuest";
export default function ControlAdult() {
    const count = useSelector((state) => state.counterAd.value);
    const countCh = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="addGuest">
            <h3>Adults</h3>
            <p className="rating">Ages 13 or above</p>
            <div className="control-Add">
                <button className="controls"
                onClick={()=>{
                    dispatch(decrementAdult())
                    dispatch(updateTotal(count+countCh));   
                }
                }>-</button>
                <p className="cityname">{count}</p>
                <button className="controls control-add" 
                    onClick={
                        ()=>{
                            dispatch(incrementAdult());
                            dispatch(updateTotal(count+countCh));
                        }
                            
                    }
                >+</button>
            </div>
        </div>
    )
}