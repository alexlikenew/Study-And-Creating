import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function SearchOrder(props) {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (!query) return
        navigate(`/order/${query}`)
        setQuery('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setQuery(e.target.value)}
                   placeholder='Search order #' type="text"/>
        </form>
    );
}

export default SearchOrder;