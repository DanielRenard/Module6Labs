import Greet from "./greetMessage"

function Greeting({name='world'}){ 
        return (
            <span>
                <h1>Hello {name}</h1>
                <Greet/>
            </span>
        )
}


export default Greeting