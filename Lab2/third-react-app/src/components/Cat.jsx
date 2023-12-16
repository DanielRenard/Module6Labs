function Cat({index, name, latinName, image}){
    return (
        <span className="catContainer">
            <img width={300} src={image}></img>
            <h2 key={index}>{name}, {latinName},</h2>
        </span>
    )
}
export default Cat