import * as actionTypes from '../ActionTypes';
import axios from 'axios'

const saveData = (responseData, apiKeyWord) => {
    switch (apiKeyWord) {
        case 'people':
            return {type: actionTypes.SAVE_PEOPLE_DATA, response: responseData}
        case 'planets':
            return {type: actionTypes.SAVE_PLANETS_DATA, response: responseData}
        case 'films':
            return {type: actionTypes.SAVE_FILMS_DATA, response: responseData}
        case 'vehicles':
            return {type: actionTypes.SAVE_VEHICLES_DATA, response: responseData}
        case 'starships':
            return {type: actionTypes.SAVE_STARSHIPS_DATA, response: responseData}
        case 'species':
            return {type: actionTypes.SAVE_SPECIES_DATA, response: responseData}
        default:
            return {type: actionTypes.ERROR, errorMessage: 'Please enter a correct fetch apiKeyWord'}
    }
}

const handleError = (error) => {
    return {type: actionTypes.ERROR, errorMessage: error}
}

export const getData = (apiKeyWord) => {
    return dispatch => {
        const fetch = async() => {
            try {
                const response = await axios.get('https://swapi.co/api/' + apiKeyWord);
                return dispatch(saveData(response.data.results, apiKeyWord))
            } catch (error) {
                return dispatch(handleError(error))
            }

        }
        fetch();
    }
};