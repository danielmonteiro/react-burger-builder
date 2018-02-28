import React from 'react';

import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from './../../UI/Backdrop/Backdrop';
import Hoc from './../../../hoc/Hoc';

const sideDrawer = (props) => {

    var attachedClass = [classes.SideDrawer, classes.Open];
    if(!props.open) {
        attachedClass = [classes.SideDrawer, classes.Close];        
    }

    return (
        <Hoc>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Hoc>
    );
}

export default sideDrawer;