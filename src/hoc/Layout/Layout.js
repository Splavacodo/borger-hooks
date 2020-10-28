import React, { useState } from 'react'; 
import { connect } from 'react-redux'; 

import Auxilary from '../Auxilary'; 
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'; 

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    const sideDrawerClosedHandler = () => { 
        setShowSideDrawer(false); 
    }

    const sideDrawerToggle = () => { 
        setShowSideDrawer(!showSideDrawer); 
    }
    return (
        <Auxilary>
        <Toolbar 
            isAuth={props.isAuthenticated}
            drawerToggleClicked={sideDrawerToggle}/>
        <SideDrawer 
            isAuth={props.isAuthenticated}
            open={showSideDrawer} 
            closed={sideDrawerClosedHandler}/>
        <main className={classes.Content}>
            {props.children}
        </main>
        </Auxilary>
    ); 
}; 

const mapStateToProps = state => {
    return { 
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout); 