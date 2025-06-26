import {useState} from "react";
export default function Form({onAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);





    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() };

        onAddItems(newItem)
        console.log(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <input  value={quantity}  onChange={(e) => setQuantity(Number(e.target.value))} type="text"/>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}
