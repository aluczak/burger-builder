import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFailure = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILURE,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            }).catch(error => {
                dispatch(purchaseBurgerFailure(error));
            });
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

const loadOrdersSuccess = (orders) => {
    return {
        type: actionTypes.LOAD_ORDERS_SUCCESS,
        orders: orders
    }
}

const loadOrdersFailure = (error) => {
    return {
        type: actionTypes.LOAD_ORDERS_FAILURE,
        error: error
    }
}

const loadOrdersStart = () => {
    return {
        type: actionTypes.LOAD_ORDERS_START
    }
}

export const loadOrders = () => {
    return dispatch => {
        dispatch(loadOrdersStart());
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }

                dispatch(loadOrdersSuccess(fetchedOrders));
            }).catch(err => {
                dispatch(loadOrdersFailure(err));
            });
    }
}