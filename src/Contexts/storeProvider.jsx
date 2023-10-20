import { useReducer } from "react";
import storeContext from "./storeContext"

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedAmount = state.totalAmount + (action.item.price * action.item.amount);
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    if (action.type === 'REMOVE') {
        const updateItem = state.items.filter((item) => {
            return (item.id !== action.id);
        })
        const updateAmount = updateItem.reduce((total, item) => {
            return total + item.price
        }, 0)
        return {
            items: updateItem,
            totalAmount: updateAmount
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