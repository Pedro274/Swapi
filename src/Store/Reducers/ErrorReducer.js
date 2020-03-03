import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    error: false,
    errorMessage: ''
}

const ErrorReducer = (state = initialState, action) => {
    switch (actionTypes.ERROR) {
        case actionTypes.ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.errorMessage
            }
        default:
            return {
                ...state
            }
    }

}

export default ErrorReducer;