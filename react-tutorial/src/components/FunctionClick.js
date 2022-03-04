import React from "react";
import {click} from "@testing-library/user-event/dist/click";

function FunctionClick() {

    function clickHandler() {
        console.log('Button clicked')
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick