import React from 'react';
import {Link} from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header() {
    return (
        <header>
            <Link to='/'>Fast React</Link>
            <SearchOrder/>
        </header>
    )
}

export default Header;