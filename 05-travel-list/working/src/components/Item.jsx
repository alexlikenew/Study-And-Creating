import {useState} from "react";
export default function Item({ item , onDeleteItem ,onToggleItem }) {
    return (
        <li>
            <input  type="checkbox"  value={item.packed} onChange={() => {onToggleItem(item.id)}} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
            <span style={{color:'red'}} onClick={() => onDeleteItem(item.id)}>XXXX</span>
        </li>
    );
}
