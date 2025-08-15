import React from "react";
import Button from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice.jsx";

function DeleteItem({ pizzaID }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaID))} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
