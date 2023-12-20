import { useState } from "react";
import Cat from "./Cat"
import AddCatFormUncontrolled from "./AddCatFormUncontrolled";

function CatList(){

    const cats = [
        { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: '../src/images/AcinonyxJubatus.jpg' },
        { name: 'Cougar', latinName: 'Puma concolor', image: '../src/images/PumaConcolor.jpg' },
        { name: 'Jaguar', latinName: 'Panthera onca', image: '../src/images/PantheraOnca.jpg'},
        { name: 'Leopard', latinName: 'Panthera pardus', image: '../src/images/PantheraPardus.jpg'},
        { name: 'Lion', latinName: 'Panthera leo', image: '../src/images/PantheraLeo.jpg' },
        { name: 'Snow leopard', latinName: 'Panthera uncia', image: '../src/images/PantheraUncia.jpg' },
        { name: 'Tiger', latinName: 'Panthera tigris', image: '../src/images/Pantheratigris.jpg' },
        // {name: 'Chester Cheetah', latinName: 'Chester Acinonyx jubatus', image: 'https://mma.prnewswire.com/media/930557/KFC_Cheetos_Hero_PR_Still.jpg?p=facebook'},
        // {name: 'Serval', latinName: 'Leptailurus serval', image: 'https://i.natgeofe.com/k/8a14407c-747f-4750-a9ec-aaa81cfe88a9/serval-full-body_16x9.jpg'},
        // {name: 'The Pink Panther', latinName: 'Ille Roseus Panthera', image: 'https://i0.wp.com/theroarbots.com/wp-content/uploads/2020/07/PinkPanther3.jpg?ssl=1'},
        // {name: 'Bobcat', latinName: 'Lynx rufus', image: 'https://www.reconnectwithnature.org/getmedia/67fd5873-9c1b-4f73-b87c-ee0fb0482992/Bobcat-3-Predator-bobcat.jpg?width=1500&height=1000&ext=.jpg'},
        // {name: 'Pete Puma', latinName: 'Pete puma concolor', image: 'https://dyn1.heritagestatic.com/lf?set=path%5B1%2F3%2F4%2F0%2F4%2F13404156%5D&call=url%5Bfile%3Aproduct.chain%5D'},
        // {name: 'Felix the Cat', latinName: 'Felix Felis catus', image: 'https://imageservice.disco.peacocktv.com/uuid/1672fe2f-350f-3625-ad9c-0d89f625b1d6/LAND_16_9?language=eng&territory=US&proposition=NBCUOTT&version=c5b347b2-218b-38b5-97c8-3c63c81cb3e6'}
        
    ];

    const [currentCats, setCurrentCats] = useState(cats);
    

    
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
        let newCats = [...currentCats]; //new variable to clone cats array
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

    const handleAddCat = (newCat) => {
        console.log(newCat)
        newCat.id = currentCats.length + 1; // unreliable but succinct
        //copy
        //modify
        //update state
        let newCats = [...currentCats, newCat]
        setCurrentCats(newCats)
    }

    const handleDelete = (idToDelete) => {
        let newCats = currentCats.filter((index) => index != idToDelete)
        setCurrentCats(newCats)
    }

    const catItemsComponent = currentCats.map((cat, index) => (
        <Cat
        key={index}
        catId={index}
        name={cat.name}
        latinName={cat.latinName}
        image={cat.image}
        onDeleteEvent={(catID) => {handleDelete(catID)}}
        />
    ))

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
                <AddCatFormUncontrolled onAddCat={handleAddCat}/>
            </div>
        </>
    )
}

export default CatList;