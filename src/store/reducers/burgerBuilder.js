import * as actionTypes from '../actions/actionTypes'; 

const initialState = { 
    ingredients: null,  
    totalPrice: 2, 
    error: false, 
    building: false
}; 

const INGREDIENT_PRICES = {
    lettuce: 0.3, 
    cheese: 0.4, 
    meat: 3.5, 
    bacon: 1.5
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: 
            return { 
                ...state, 
                ingredients: { 
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }, 
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName], 
                building: true
            };
        case actionTypes.REMOVE_INGREDIENT: 
            return { 
                ...state, 
                ingredients: { 
                    ...state.ingredients, 
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName], 
                building: true
            };
        case actionTypes.SET_INGREDIENTS: 
            return { 
                ...state, 
                ingredients: {
                    lettuce: action.ingredients.lettuce, 
                    bacon: action.ingredients.bacon, 
                    cheese: action.ingredients.cheese, 
                    meat: action.ingredients.meat
                }, 
                totalPrice: 2,
                error: false, 
                building: false 
            }; 
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return { 
                ...state, 
                error: true
            };
        default: 
            return state;
    }
}

export default reducer; 