import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let ingredientComponents = [];

    for(let i in props.ingredients){
        for(let j=0; j<props.ingredients[i]; j++){
            ingredientComponents.push(<BurgerIngredient type={i} key={i + j} />);
        }
    }

    if (ingredientComponents.length === 0){
        ingredientComponents = <p>Please add some ingredients</p>;
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingredientComponents}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;