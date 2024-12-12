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
	return (
		<main className='menu'>
			<h2>Our new Menu for our customers</h2>
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
		</main>
	)
}
function Footer() {
	const hour = new Date().getHours()
	const openHour = 12
	const closeHour = 22
	const isOpen = hour >= openHour && hour <= closeHour
	// isOpen ? alert('We`re open now') : alert('Sorry we are closed')

	return <footer className='footer'>{new Date().toLocaleDateString()} Were currently open</footer>
	// return React.createElement('footer', null, 'Were currently open')
}
function Pizza() {
	return (
		<div>
			<img src='../public/pizzas/spinaci.jpg' alt='spinacci' />
			<h3>Pizza Spinaci</h3>
			<p>Tomato, mozarella, spinach, and ricotta cheese</p>
		</div>
	)
}

export default App
