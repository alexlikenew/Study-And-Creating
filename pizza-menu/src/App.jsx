import { findRenderedComponentWithType } from 'react-dom/test-utils'
import './App.css'
import React from 'react'
import './index.css'
const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
]

function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
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
	const pizzas = pizzaData
	const numPizzas = pizzas.length

	return (
		<main className='menu'>
			<h2>Our new Menu for our customers</h2>
			{numPizzas > 0 ? (
				<ul className='pizzas'>
					{pizzas.map(pizza => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : (
				<p>Please come back later</p>
			)}

			{/* <Pizza
				name='Pizza Spinaci'
				ingredients='Tomato, mozarella, spinach, and ricotta cheese'
				photoName='../public/pizzas/spinaci.jpg'
				price={10}
			/>
			<Pizza name='Pizza Funhhi' ingredients='tomato , mashrooms' price={12} photoName='../public/pizzas/funghi.jpg' /> */}
		</main>
	)
}
function Pizza(props) {
	if (props.pizzaObj.soldOut) {
		return null
	}
	return (
		<li className='pizza'>
			<img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
			<div>
				<h3>{props.pizzaObj.name}</h3>
				<p>{props.pizzaObj.ingredients}</p>
				<span>{props.pizzaObj.price}</span>
				{/* <img src='' alt='' /> */}
			</div>
		</li>
	)
}

function Footer() {
	const hour = new Date().getHours()
	const openHour = 6
	const closeHour = 22
	const isOpen = hour >= openHour && hour <= closeHour
	// isOpen ? alert('We`re open now') : alert('Sorry we are closed')

	// 	if (!isOpen) {
	// return (<p>Were closed now!</p>)
	// 	}

	return <footer className='footer'>{isOpen ? <Order closeHour={closeHour} /> : <p>Were closed now!</p>}</footer>
	// return React.createElement('footer', null, 'Were currently open')
}
function Order(props) {
	return (
		<div className='order'>
			<p>Were open until {props.closeHour}</p>
			<button className='btn'>Order</button>
		</div>
	)
}
export default App
