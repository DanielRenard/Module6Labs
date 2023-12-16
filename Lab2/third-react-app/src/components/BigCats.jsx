import Cat from "./Cat"
import "../styles/cats.css"

function CatList(){

    const cats = [
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '../src/images/AcinonyxJubatus.jpg' },
        { name: 'Cougar', latinName: 'Puma concolor', image: '../src/images/PumaConcolor.jpg' },
        { name: 'Jaguar', latinName: 'Panthera onca', image: '../src/images/PantheraOnca.jpg'},
        { name: 'Leopard', latinName: 'Panthera pardus', image: '../src/images/PantheraPardus.jpg'},
        { name: 'Lion', latinName: 'Panthera leo', image: '../src/images/PantheraLeo.jpg' },
        { name: 'Snow leopard', latinName: 'Panthera uncia', image: '../src/images/PantheraUncia.jpg' },
        { name: 'Tiger', latinName: 'Panthera tigris', image: '../src/images/Pantheratigris.jpg' },
    ]

    // const SingleCat = cats.map((cat, index) => {
    //     return (
    //         <li key={index}>{cat.name}, {cat.latinName}, <img src={cat.image}></img></li>
    //     )
    // })
    const catItems = cats.map((cat, index) => (
        <Cat
        key={index}
        name={cat.name}
        latinName={cat.latinName}
        image={cat.image}
        />
    )) 
    return (
        <div>
            {catItems}
        </div>
    )
}




export default CatList;