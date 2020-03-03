import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    speciesDataResult: []
}

const speciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_SPECIES_DATA:
            return {
                ...state,
                speciesDataResult: state
                    .speciesDataResult
                    .concat(action.response)
            }
        default:
            return {
                ...state
            }

    }
}
export default speciesReducer;