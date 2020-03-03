import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    starShipsDataResult: []
}

const starShipsReducer = (state = initialState, action) => {
    switch (actionTypes.SAVE_STARSHIPS_DATA) {
        case actionTypes.SAVE_STARSHIPS_DATA:
            return {
                ...state,
                starShipsDataResult: state
                    .starShipsDataResult
                    .concat([action.response])
            }
        default:
            return {
                ...state
            }

    }

}

export default starShipsReducer;