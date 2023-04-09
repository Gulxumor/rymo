const ACTION_TYPES = {
    INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
    DECREMENT_QUANTITY: "DECREMENT_QUANTITY"
}

const INITIAL_STATE = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT_QUANTITY: {
            let result = { ...state, count: state.count + 1 };
            return result
        }
        case ACTION_TYPES.DECREMENT_QUANTITY: {
            let result = { ...state, count: state.count - 1 };
            return result
        }
        default: return state
    }
}

export { ACTION_TYPES, INITIAL_STATE, reducer }