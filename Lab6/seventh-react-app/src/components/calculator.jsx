import { useState } from "react";

function Calculator() {

    // const [currentNumber, setCurrentNumber] = useState(number);

    const [operation, setOperation] = useState("+");
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);

    function compute() {  
        console.log("we in here") 
        console.log(operation, number1, number2)
        let computation
        switch (operation) {
            case '+':
                computation = number1 + number2
                break
            case '-':
                computation = number1 - number2
                break
            case '*':
                computation = number1 * number2
                break
            case '/':
                computation = number1 / number2
                break
            default:
                return
        }

        setResult(computation)

    }
    
    return (
        
        <div>
            <input value={number1} type="number" name="number1" onChange={(e) => setNumber1(parseFloat(e.target.value))}/>
            <select id="operation" value={operation} 
                onChange={(e) => setOperation(e.target.value)}>
                    <option>+</option>
                    <option>-</option>
                    <option>/</option>
                    <option>*</option>
                </select>
            <input value={number2} type="number" name="number2" onChange={(e) => setNumber2(parseFloat(e.target.value))}/>
            <button id="submit" onClick={() => {compute()}}>Submit</button>
            <div id="result">{result}</div>
        </div>
    )
}

export default Calculator