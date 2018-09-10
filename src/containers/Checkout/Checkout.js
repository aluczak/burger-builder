import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        const params = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        let price = 0;
        for (let param of params.entries()) {
            if(param[0] === 'price') { 
                price = +param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }

        this.setState({ ingredients: ingredients, totalPrice: price });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.state.ingredients} />
                <Route path={`${this.props.match.url}/contact-data` } 
                    render={(props) => <ContactData {...props} ingredients={this.props.ingredients} price={this.state.totalPrice} />} />
            </div>
        );
    }
}

export default Checkout;
