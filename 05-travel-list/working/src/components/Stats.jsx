import {useState} from "react";
export function Stats({items}) {
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round(numPacked / numItems * 100)
    console.log(numPacked)
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? 'You ready to go ' : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
            </em>

        </footer>
    );
}