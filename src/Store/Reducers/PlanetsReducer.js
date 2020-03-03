import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    planetsDataResult: []
}

const planetsReducer = (state = initialState, action) => {
    switch (actionTypes.SAVE_PLANETS_DATA) {
        case actionTypes.SAVE_PLANETS_DATA:
            return {
                ...state,
                planetsDataResult: state
                    .planetsDataResult
                    .concat([action.response])
            }
        default:
            return {
                ...state
            }

    }

}

export default planetsReducer;