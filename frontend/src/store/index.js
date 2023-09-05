import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import sessionReducer from './session';
import carsReducer from './cars';
import energyReducer from './energy';
import apparelReducer from './apparel';
import accessoriesReducer from './accessories';
import lifestyleReducer from './lifestyle';
import cartReducer from "./cart";

const rootReducer = combineReducers({
    session: sessionReducer,
    cars: carsReducer,
    energy: energyReducer,
    apparel: apparelReducer,
    accessories: accessoriesReducer,
    lifestyle: lifestyleReducer,
    cart: cartReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    // const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = preloadedState => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;
