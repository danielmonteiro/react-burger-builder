import React from 'react';

import Hoc from './../../../hoc/Hoc';
import Button from './../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients).map(ingredient => (
        <li key={ingredient}><span style={{ textTransform: 'capitalize' }}>{ingredient}</span>: {props.ingredients[ingredient]}</li>
    ));

    return (
        <Hoc>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.cancelOrder}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.continueOrder}>CONTINUE</Button>
        </Hoc>
    );
};

export default orderSummary;