import { useState } from "react";

function AddCatFormUncontrolled({onAddCat}) {

    // ++ add support for the synopsis field as well, here and below
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        
        const newCat = Object.fromEntries(data)
        console.log(newCat)
        onAddCat(newCat)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Cat Name:
                    <input name="name"/>
                </label> <br/>
                <label>Cat Latin Name:
                    <input name="latinName"/>
                </label> <br/>
                <label>Image Link:
                    <input name="image" />
                </label> <br/>
                <button>Add Cat</button>
            </form>
        </div>
    )
}

export default AddCatFormUncontrolled;