import React, { createContext } from "react";

const CartContext = React.createContext({
    clicked: false,
    setClicked: () => { }
})
export default CartContext;