import {useState} from 'react'
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
    const [showAddFriend, setShowAddFriend] = useState(false)
    const [friends, setFriends] = useState(initialFriends)
    const [selectedFriend, setSelectedFriend] = useState(false)

    function handleShowAddFriend() {
        setShowAddFriend(!showAddFriend)
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend])
        setShowAddFriend(false)
    }

    function handleSelection(friend) {
        setSelectedFriend(cur => cur?.id === friend.id ? 'null' : friend)
        setShowAddFriend(false)
    }

    function handleSplitBill(value) {
        setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? {
            ...friend,
            balance: friend.balance + value
        } : friend))
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend}/>

                {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}

                <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add friend'}</Button>

            </div>
            {selectedFriend &&
                <FormsSplitBill key={selectedFriend.id} selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
        </div>
    )
}

function Button({onClick, children}) {
    return <button className='button' onClick={onClick}>{children}</button>
}

function FriendsList({friends, onSelection, selectedFriend}) {
    return <ul>
        {friends.map((friend) => (
            <Friend selectedFriend={selectedFriend} onSelection={onSelection} friend={friend} key={friend.id}/>))}
    </ul>
}

function Friend({friend, onSelection, selectedFriend}) {

    const isSelected = selectedFriend?.id === friend.id

    return <li className={isSelected ? "selected" : ''}>
        <img src={friend.image} alt={friend.name}/>
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (<p className='red'>You owe {friend.name} {Math.abs(friend.balance)} Euro</p>)}
        {friend.balance > 0 && (<p className='green'> {friend.name} owe you {Math.abs(friend.balance)} Euro</p>)}
        {friend.balance === 0 && (<p className=''>You and {friend.name} are even </p>)}

        <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Show"}</Button>
    </li>
}


function FormAddFriend({onAddFriend}) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('https://i.pravatar.cc/48')

    function handleSubmit(e) {
        e.preventDefault();
        const id = crypto.randomUUID()

        if (!name || !image) return
        const newFriend = {
            name, image: `${image}?=${id}`, balance: 0, id: id,
        };
        onAddFriend(newFriend)
        setName('')
        setImage('https://i.pravatar.cc/48')
    }


    return <form action="" className='form-add-friend' onSubmit={handleSubmit}>
        <label htmlFor="">Friend name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>

        <label htmlFor="">Image URL</label>
        <input type="text" value={image} onChange={e => setImage(e.target.value)}/>

        <Button>Select</Button>
    </form>
}

function FormsSplitBill({selectedFriend, onSplitBill}) {
    const [bill, setBill] = useState('')
    const [paidByUser, setpaidByUser] = useState('')
    const paidByFriend = bill ? bill - paidByUser : '';
    const [whoIsPaying, setWhoIsPaying] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if (!bill || !paidByUser) {

        }
        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)


    }


    return <form action="" className='form-split-bill' onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label htmlFor="">Bill value</label>
        <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))}/>

        <label htmlFor="">Your expense</label>
        <input type="text" value={paidByUser}
               onChange={(e) => setpaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>

        <label htmlFor="">{selectedFriend.name} expense</label>
        <input disabled type="text" value={paidByFriend}/>

        <label htmlFor="">Who is paying the bill</label>
        <select name="" id="" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
    </form>
}


export default App
