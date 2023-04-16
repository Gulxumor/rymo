import products from "../../utils/newArrivals"

const ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
    DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
    REMOVE_ITEM: 'REMOVE_ITEM',
    ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
}


const INITIAL_STATE = {
    products: products,
    cart: [],
    wishlist: [],
}


const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART: {
            const isExist = state.cart.filter(product => product.id === action.payload.product.id).length;
            if (isExist > 0) {
                let result = state.cart.map(product =>
                    product.id === action.payload.product.id ? { ...product, quantity: product.quantity + 1 } : product
                );
                console.log();
                return { ...state, cart: result };
            } else {
                let result = { ...state, cart: [...state.cart, action.payload.product] };
                return result;
            }
        }

        case ACTION_TYPES.INCREMENT_QUANTITY: {
            const result = state.cart.map(product =>
                product.id === action.payload.product.id ? { ...product, quantity: product.quantity + 1 } : product
            );
            return { ...state, cart: result };
        }

        case ACTION_TYPES.DECREMENT_QUANTITY: {
            if (action.payload.product.quantity > 1) {
                const result = state.cart.map(product =>
                    product.id === action.payload.product.id ? { ...product, quantity: product.quantity - 1 } : product
                );
                return { ...state, cart: result };
            } else {
                const result = state.cart.filter(product => product.id !== action.payload.product.id);
                return { ...state, cart: result };
            }
        }

        case ACTION_TYPES.REMOVE_ITEM: {
            const result = state.cart.filter(product => product.id !== action.payload.product_id);
            return { ...state, cart: result };
        }

        case ACTION_TYPES.ADD_TO_WISHLIST: {
            const result = [...state.wishlist, { ...action.payload.product, like: !action.payload.product.like }];
            console.log(result);
            return { ...state, wishlist: result };
        }

        default:
            return state;
    }
}

export default reducer

export { INITIAL_STATE, ACTION_TYPES, reducer }