import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder(props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-bg w-64 rounded-full bg-yellow-100 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64 sm:focus:w-72"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order #"
        type="text"
      />
    </form>
  );
}

export default SearchOrder;
