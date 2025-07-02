import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function App() {
const [showAddFriend , setShowAddFriend] = useState(false)
function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend)
}
  return (
<div className='app'>
    <div className='sidebar'>
    <FriendsList/>
        {showAddFriend && <FormAddFriend/>}
        <Button onClick={handleShowAddFriend}>{showAddFriend ?'Close' : 'Add friend'  }</Button>
    </div>
    <FormsSplitBill/>
</div>
  )
}
function Button({onClick , children}){
    return <button className='button' onClick={onClick}>{children}</button>
}

function FriendsList() {
    const friends = initialFriends;
    return <ul>
        {friends.map((friend) => (<Friend friend={friend} key={friend.id}/>))}
    </ul>
}

function Friend({friend}) {
    return <li>
        <img src={friend.image} alt={friend.name}/>
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (<p className='red'>You owe {friend.name} {Math.abs(friend.balance)} Euro</p>)}
        {friend.balance > 0 && (<p className='green'> {friend.name} owe you {Math.abs(friend.balance)} Euro</p>)}
        {friend.balance === 0 && (<p className=''>You and {friend.name} are even Euro</p>)}

        <Button>Select</Button>
    </li>
}


function FormAddFriend(){

    const [name , setName] = useState('')
    const [image , setImage] = useState('https://i.pravatar.cc/48')
    function handleSubmit(e) {
        e.preventDefault();
        const id = crypto.randomUUID()
        const newFriend ={
            name , image:`${image}?=${id}`, balance: 0 , id: id,
        };
        console.log(newFriend)
        setName('')
        setImage('https://i.pravatar.cc/48')
    }


    return <form action="" className='form-add-friend'  onSubmit={handleSubmit}>
        <label htmlFor="">Friend name</label>
        <input type="text" value={name} onChange={e=> setName(e.target.value)}/>

        <label htmlFor="">Image URL</label>
        <input type="text" value={image} onChange={e => setImage(e.target.value)} />

        <Button>Select</Button>
    </form>
}

function FormsSplitBill() {


    return <form action="" className='form-split-bill'>
        <h2>Split a bill with X</h2>

        <label htmlFor="">Bill value</label>
        <input type="text"/>

        <label htmlFor="">Your expense</label>
        <input type="text"/>

        <label htmlFor="">X expense</label>
        <input disabled type="text"/>

        <label htmlFor="">Who is paying the bill</label>
        <select name="" id="">
            <option value="user">You</option>
            <option value="friend">X</option>
        </select>

        <Button>Split Bill</Button>
    </form>
}


export default App
