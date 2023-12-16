function Greeting({name='world', children}){ 
        return (
            <span>
                <h1>Hello {name}. {children}</h1>
            </span>
        )
}

export default Greeting