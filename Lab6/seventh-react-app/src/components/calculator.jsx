import { useState } from "react";

function Calculator() {

    const [currentNumber, setCurrentNumber] = useState(number);

    const add = (num1, num2) => {
        // let num1 = [currentNumber]
        let value = num1 + num2
        // setCurrentNumber(value)
        return value
    }

    return (
        <div>
            <button onClick={add}>+</button>
        </div>
    )

}

export default Calculator