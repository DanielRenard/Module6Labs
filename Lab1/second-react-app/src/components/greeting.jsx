function Greeting({name='world', greet}){ 
        return (
            <span>
                <h1>Hello {name}</h1>
                <p>{greet}</p>
            </span>
        )
}


export default Greeting