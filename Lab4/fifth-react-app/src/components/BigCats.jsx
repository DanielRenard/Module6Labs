import { useState } from "react";
import Cat from "./Cat"

function CatList(){

    const cats = [
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '../src/images/AcinonyxJubatus.jpg' },
        { name: 'Cougar', latinName: 'Puma concolor', image: '../src/images/PumaConcolor.jpg' },
        { name: 'Jaguar', latinName: 'Panthera onca', image: '../src/images/PantheraOnca.jpg'},
        { name: 'Leopard', latinName: 'Panthera pardus', image: '../src/images/PantheraPardus.jpg'},
        { name: 'Lion', latinName: 'Panthera leo', image: '../src/images/PantheraLeo.jpg' },
        { name: 'Snow leopard', latinName: 'Panthera uncia', image: '../src/images/PantheraUncia.jpg' },
        { name: 'Tiger', latinName: 'Panthera tigris', image: '../src/images/Pantheratigris.jpg' },
    ];

    const [currentCats, setCurrentCats] = useState(cats);
    
    const catItemsComponent = currentCats.map((cat, index) => (
        <Cat
        key={index}
        name={cat.name}
        latinName={cat.latinName}
        image={cat.image}
        />
    ))
    
    const handleSortByCatName = () => {
        // console.log('handleSortByCatName')
        let newCats = [...currentCats]
        //sort compares a to b in arrow function
        newCats.sort((a,b) => a.name.localeCompare(b.name))
        setCurrentCats(newCats)
    }

    const handleSortByLatinName = () => {
        // console.log('handleSortByLatinName')
        let newCats = [...currentCats]
        //sort compares a to b in arrow function
        newCats.sort((a,b) => a.latinName.localeCompare(b.latinName))
        setCurrentCats(newCats)
    }

    const handleReverseCats = () => {
        let newCats = [...currentCats]; //new variable to clone movies array
        newCats.reverse(); //reverse method applied to new array
        setCurrentCats(newCats); //updating state by using cloned array AFTER reverse method on line above
      };

    const handleSortPanthera = () => {
        let newCats = currentCats.filter(cat => cat.latinName.includes('Panthera'))
        setCurrentCats(newCats)
    }

    const handleRefreshList = () => {
        setCurrentCats(cats)
    }

    return (
        <>
            <div className="sortingWrapper">
                <button onClick={handleSortByCatName}>Sort by Name</button>
                <button onClick={handleSortByLatinName}>Sort Latin Name</button>
                <button onClick={handleReverseCats}>Reverse Cats</button>
                <button onClick={handleSortPanthera}>Panthera Family</button>
                <button onClick={handleRefreshList}>Refresh List</button>
            </div>
            <div className="gridWrapper">
                {catItemsComponent}
            </div>
        </>
    )
}




export default CatList;