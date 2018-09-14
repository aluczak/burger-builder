import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';


class Orders extends Component {
    componentDidMount() {
        this.props.loadOrders();
    }

    render() {
        let orders = <Spinner />
        if(!this.props.loading) {
            orders = this.props.orders.map(order =>
                <Order 
                    key={order.id} 
                    ingredients={order.ingredients}
                    price={order.totalPrice} /> 
            );
        }
         
        return <div>{orders}</div>;
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadOrders: () => dispatch(actions.loadOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
