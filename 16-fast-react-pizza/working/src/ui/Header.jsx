import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
