import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={() => props.removeIngredientHandler(props.type)} disabled={props.quantity === 0}>Less</button>
        {props.quantity}
        <button className={classes.More} onClick={() => props.addIngredientHandler(props.type)}>More</button>
    </div>
);

export default buildControl;