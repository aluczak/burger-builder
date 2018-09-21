import * as actionTypes from './actionsTypes';

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

export const purchaseBurger = (orderData, token) => {
    return {
        type: actionTypes.PURCHASE_BURGER,
        token: token,
        orderData: orderData
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const loadOrdersSuccess = (orders) => {
    return {
        type: actionTypes.LOAD_ORDERS_SUCCESS,
        orders: orders
    }
}

export const loadOrdersFailure = (error) => {
    return {
        type: actionTypes.LOAD_ORDERS_FAILURE,
        error: error
    }
}

export const loadOrdersStart = () => {
    return {
        type: actionTypes.LOAD_ORDERS_START
    }
}

export const loadOrders = (token, userId) => {
    return {
        type: actionTypes.LOAD_ORDERS,
        token: token,
        userId: userId
    }
}
