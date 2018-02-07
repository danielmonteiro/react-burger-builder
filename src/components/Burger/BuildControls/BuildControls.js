import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price}</strong></p>
        {controls.map(control => (
            <BuildControl 
                key={control.type} 
                label={control.label}
                type={control.type}
                addIngredientHandler={props.addIngredientHandler}
                removeIngredientHandler={props.removeIngredientHandler}
                quantity={props.ingredients[control.type]} />
        ))}

        <button 
            className={classes.OrderButton} 
            disabled={!props.canOrder}
            onClick={props.openModalHandler}>ORDER</button>
    </div>
);

export default buildControls;