import {combineReducers }from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers( {
    cart: cartReducer,
    user: userReducer
});