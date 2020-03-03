import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    peopleDataResult: []
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_PEOPLE_DATA:
            return {
                ...state,
                peopleDataResult: state
                    .peopleDataResult
                    .concat(action.response)
            }
        default:
            return {
                ...state
            }

    }

}
export default peopleReducer;