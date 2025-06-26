import { useState } from 'react'
import './App.css'

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems([...items,item])
    }
    function handleDeleteItems(id){
    setItems(items=> items.filter(item => item.id !== id))
    }
    function handeToogleItem(id) {
        setItems(items => items.map((item) => item.id === id ? {...item , packed : !item.packed} : item))
    }
    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList onDeleteItem={handleDeleteItems} onToggleItem={handeToogleItem} items={items} />
            <Stats items={items}/>
        </div>
    );
}
function Logo() {
    return <h1>Far Away</h1>;
}

function Form({onAddItems}) {
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

function PackingList({items , onDeleteItem , onToggleItem}) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                ))}
            </ul>
        </div>
    );
}
function Item({ item , onDeleteItem ,onToggleItem }) {
    return (
        <li>
            <input  type="checkbox"  value={item.packed} onChange={() => {onToggleItem(item.id)}} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
            <span style={{color:'red'}} onClick={() => onDeleteItem(item.id)}>XXXX</span>
        </li>
    );
}

function Stats({items}) {
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round(numPacked / numItems * 100)
    console.log(numPacked)
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? 'You ready to go ' : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
            </em>

        </footer>
    );
}



export default App
