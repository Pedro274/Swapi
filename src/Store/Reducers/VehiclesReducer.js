import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    vehiclesDataResult: []
}

const vehiclesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_VEHICLES_DATA:
            return {
                ...state,
                vehiclesDataResult: state
                    .vehiclesDataResult
                    .concat(action.response)
            }
        default:
            return {
                ...state
            }
    }
}

export default vehiclesReducer;