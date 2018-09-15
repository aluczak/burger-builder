import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(previousState => { 
            return { showSideDrawer: !previousState.showSideDrawer };
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar 
                    isAuthenticated={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    isAuthenticated={this.props.isAuthenticated}
                    closed={this.sideDrawerClosedHandler} 
                    open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );   
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);
