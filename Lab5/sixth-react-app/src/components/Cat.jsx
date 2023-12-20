function Cat({catId, name, latinName, image, onDeleteEvent}){
    const handleDelete = (e) => {
        onDeleteEvent(catId)
    }
    return (
        <div className="card">
            <img width={300} src={image}></img>
            <h2 key={catId}>{name}, {latinName},</h2>
            <button onClick={handleDelete}>Delete Cat</button>
        </div>
    )
}
export default Cat