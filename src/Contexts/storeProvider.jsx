import storeContext from "./storeContext"

const StoreProvider = props => {
    const addItemToCartHandler = (item) => { }
    const removeItemFromCartHandler = (id) => { }
    const StoreContext = {
        items: [],
        totalAmount: 0,
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