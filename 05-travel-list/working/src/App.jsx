import {useState} from 'react'
import './App.css'
import Logo from './components/Logo.jsx'
import Form from './components/Form.jsx'
import PackingList from './components/PackingList.jsx'
import {Stats} from "./components/Stats.jsx";


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
    function handleClearItems(){
        const confirmed = window.confirm('Are you sure?')
      confirmed ? setItems([]) : ''
    }
    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList onDeleteItem={handleDeleteItems} onToggleItem={handeToogleItem} items={items} onClearItems={handleClearItems} />
            <Stats items={items}/>
        </div>
    );
}

export default App
