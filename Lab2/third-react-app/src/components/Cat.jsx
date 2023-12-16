function Cat({index, name, latinName, image}){
    return (
        <div className="catContainer">
            <img width={300} src={image}></img>
            <div>
                <h2 key={index}>{name}, {latinName},</h2>
            </div>
        </div>
    )
}
export default Cat