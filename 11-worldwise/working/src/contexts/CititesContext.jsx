import {createContext, useState, useEffect, useContext} from "react";
import {Navigate, Route} from "react-router-dom";
import Homepage from "../pages/Homepage.jsx";
import Product from "../pages/Product.jsx";
import Pricing from "../pages/Pricing.jsx";
import Login from "../pages/Login.jsx";
import AppLayout from "../pages/AppLayout.jsx";
import CitiList from "../components/CitiList.jsx";

const BASE_URL = 'http://localhost:8000'
const CitiesContext = createContext()

function CitiesProvider({children}) {

    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentCity, setCurrentCity] = useState({})


    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json()
                setCities(data)

            } catch {
                alert('There was a problem')
            } finally {
                setIsLoading(false)
            }
        }

        fetchCities();
    }, []);

    async function getCity(id) {
        try {
            setIsLoading(true)
            const res = await fetch(`${BASE_URL}/cities/${id}`)
            const data = await res.json()
            setCurrentCity(data)

        } catch {
            alert('There was a problem')
        } finally {
            setIsLoading(false)
        }
    }

    return <CitiesContext.Provider value={{
        cities, isLoading, currentCity, getCity
    }}>
        {children}
    </CitiesContext.Provider>

}

function useCities() {
    const contex = useContext(CitiesContext)
    if (contex === undefined) throw new Error('Post contex was used outside of the PostProvider')
    
    return contex
}

export {CitiesProvider, useCities};