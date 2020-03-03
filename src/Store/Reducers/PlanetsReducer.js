import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    planetsDataResult: []
}

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_PLANETS_DATA:
            return {
                ...state,
                planetsDataResult: state
                    .planetsDataResult
                    .concat(action.response)
            }
        default:
            return {
                ...state
            }

    }

}

export default planetsReducer;