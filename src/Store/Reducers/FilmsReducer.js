import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    filmsDataResult: []
}

const filmsReducer = (state = initialState, action) => {
    switch (actionTypes.SAVE_FILMS_DATA) {
        case actionTypes.SAVE_FILMS_DATA:
            return {
                ...state,
                filmsDataResult: state
                    .filmsDataResult
                    .concat([action.response])
            }
        default:
            return {
                ...state
            }
    }

}

export default filmsReducer;