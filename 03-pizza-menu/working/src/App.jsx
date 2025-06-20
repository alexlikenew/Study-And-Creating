import {useState} from 'react'

import './App.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {

    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>

    )
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {

    const pizzas = pizzaData;

    return <main className='menu'>
        <h2>Our menu</h2>


        {pizzas.length > 0 ? (
            <>
                <p>example article</p>
                <ul className='pizzas'>
                    {pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
                </ul>
            </>
        ) : <p>We`re still working on our menu</p>}


    </main>
}

function Pizza({pizzaObj}) {

    // if (pizzaObj.soldOut) {
    //     return null
    // }
    return <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : null}`}>
        <img src={pizzaObj.photoName} alt="Pizza "/>
        <div>
            <h2>{pizzaObj.name}</h2>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price}</span>
        </div>
    </li>
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && openHour < closeHour;

    return (
        <footer className='footer'>
            {isOpen ? <Order closeHour={closeHour}/> :
                <p>We`re happy to welcome you between {openHour} and {closeHour}</p>}
        </footer>
    )

}

function Order({closeHour}) {
    return (
        <div>
            <p>We`re open until {closeHour}:00</p>
            <button className="btn"> Order</button>
        </div>

    )
}


export default App
