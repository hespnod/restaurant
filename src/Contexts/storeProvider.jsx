import { useReducer } from "react";
import storeContext from "./storeContext"

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItem = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + (action.item.price * action.item.amount);
        return {
            items: updatedItem,
            totalAmount: updatedAmount
        }
    }
    return defaultCartState;
}

const StoreProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = (item) => {
        dispatchCartState({ type: 'ADD', item: item });
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartState({ type: 'REMOVE', id: id });
    }
    const StoreContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <storeContext.Provider value={StoreContext}>
            {props.children}
        </storeContext.Provider>
    )
};

export default StoreProvider;