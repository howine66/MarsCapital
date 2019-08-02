import {UserActionTypes} from './user.types'

const INITIATE_STATE = {
    currentUser: null
};

const userReducer = (state = INITIATE_STATE,action) => {
    switch (action.type) {

         case UserActionTypes.SET_CURRENT_USER :
            return {
                ...state,
                currentUser:action.payload
            };
            default:
                return state;
    }
};

export default userReducer;