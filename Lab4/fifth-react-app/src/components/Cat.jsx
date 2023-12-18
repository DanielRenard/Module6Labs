// import '../styles/cat.css'

function Cat({index, name, latinName, image}){
    return (
        <div className="card">
            <img width={300} src={image}></img>
            <h2 key={index}>{name}, {latinName},</h2>
        </div>
    )
}
export default Cat