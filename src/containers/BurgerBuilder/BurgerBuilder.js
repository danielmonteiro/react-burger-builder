import React, { Component } from 'react';
import Hoc from './../../hoc/Hoc';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    'salad': 0.5,
    'cheese': 1,
    'bacon': 3,
    'meat': 5
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 5,
        canOrder: false,
        openModal: false
    }

    addIngredientHandler = (type) => {
        let typeCount = this.state.ingredients[type] + 1;
        let newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        let newState = { ...this.state };
        newState.ingredients[type] = typeCount;
        newState.totalPrice = newPrice;
        this.setState(newState);
        this.setCanOrder(newState);
    }

    removeIngredientHandler = (type) => {
        let typeCount = this.state.ingredients[type] - 1;
        let newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        let newState = { ...this.state };
        newState.ingredients[type] = typeCount;
        newState.totalPrice = newPrice;
        this.setState(newState);
        this.setCanOrder(newState);
    }

    setCanOrder = (state) => {
        
        const totalIngredients = Object.keys(state.ingredients).reduce((prev, key) => {
            return prev + state.ingredients[key];
        }, 0);

        const canOrder = totalIngredients > 0;
        let newState = {...state};
        newState.canOrder = canOrder;
        this.setState(newState);
    }

    openModalHandler = () => {
        this.setState({ openModal: true });
    }

    closeModalHandler = () => {
        this.setState({ openModal: false });
    }

    continueOrderHandler = () => {
        alert('CONTINUE');
    }
    
    render() {
        return (
            <Hoc>
                <Modal openModal={this.state.openModal} closeModalHandler={this.closeModalHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        cancelOrder={this.closeModalHandler}
                        continueOrder={this.continueOrderHandler}
                        totalPrice={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    addIngredientHandler={this.addIngredientHandler} 
                    removeIngredientHandler={this.removeIngredientHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    canOrder={this.state.canOrder}
                    openModalHandler={this.openModalHandler} />
            </Hoc>
        );
    }
}

export default BurgerBuilder;