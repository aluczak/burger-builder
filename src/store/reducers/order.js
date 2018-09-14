import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchasInit = (state, action) => {
    return updateObject(state, { purchased: false });
}

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, { id: action.orderId });
    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
    });
}

const purchaseBurgerFailure = (state, action) => {
    return updateObject(state, { loading: false });
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { loading: false });
}

const loadOrdersStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const loadOrdersSuccess = (state, action) => {
    return updateObject(state, { orders: action.orders, loading: false });
}

const loadOrdersFailure = (state, action) => {
    return updateObject(state, { loading: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchasInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAILURE: return purchaseBurgerFailure(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        case actionTypes.LOAD_ORDERS_START: return loadOrdersStart(state, action);
        case actionTypes.LOAD_ORDERS_SUCCESS: return loadOrdersSuccess(state, action);
        case actionTypes.LOAD_ORDERS_FAILURE: return loadOrdersFailure(state, action);
        default:
            return state;
    }
}

export default reducer;
