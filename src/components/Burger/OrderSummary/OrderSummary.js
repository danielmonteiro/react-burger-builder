import React from 'react';

import Hoc from './../../../hoc/Hoc';

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
        </Hoc>
    );
};

export default orderSummary;