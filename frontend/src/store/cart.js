const GET_CART = 'cart/getCart';
const ADD_ITEM = 'cart/addItem';
const UPDATE_ITEM = 'cart/updateItem';
const DELETE_ITEM = 'cart/deleteItem';

const getCart = cart => {
    return {
        type: GET_CART,
        cart
    }
}

const newItem = item => {
    return {
        type: ADD_ITEM,
        item
    }
}

const updateItem = item => {
    return {
        type: UPDATE_ITEM,
        item
    }
}

const deleteItem = item => {
    return {
        type: DELETE_ITEM,
        item
    }
}

export const getCartThunk = () => async (dispatch) => {
    const response = await fetch('api/cart');

    if (response.ok) {
        cart = response.json();
        dispatch(getCart(cart));
        return cart;
    }
}

export const newItemThunk = (item, price, size, quantity, userId) => async (dispatch) => {
    const response = await fetch('/api/cart/new', {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({item, price, size, quantity, userId})
    });

    if (response.ok) {
        const item = response.json();
        dispatch(newItem(item));
        return item;
    }
}

export const updateItemThunk = (item, price, size, quantity, userId) => async (dispatch) => {
    const response = await fetch('/api/update', {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({item, price, size, quantity, userId})
    });

    if (response.ok) {
        const item = response.json();
        dispatch(updateItem(item));
        return item;
    }
}

export const deleteItemThunk = (itemId, user) => async (req, res) => {
    const response = await fetch(`/api/${itemId}/delete`, {
        method: "DELETE"
    })

    if (response.ok) {
        const deleted = await response.json();
        dispatch(deleteItem(deleted));
        return deleted;
    }
}

const initialState = {};
const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CART: {
            state = {...state}
            action.cart.Cart.forEach(cart => {
                state[cart.id] = cart;
            })
            return state
        }
        case ADD_ITEM: {
            state = {...state}
            action.item.Cart.forEach(item => {
                state[item.id] = item;
            })
            return state
        }
        case UPDATE_ITEM: {
            state = {...state}
            action.item.Cart.forEach(item => {
                state[item.id] = item;
            })
            return state
        }
        case DELETE_ITEM: {
            state = {...state}
            action.item.Cart.forEach(cart => {
                state[cart.id] = cart;
            })
            return state
        }
        default: {
            return state;
        }
    }
};

export default cartReducer;
