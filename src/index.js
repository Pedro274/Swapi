import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';

import filmReducer from './Store/Reducers/FilmsReducer';
import peopleReducer from './Store/Reducers/PeopleReducer';
import planetsReducer from './Store/Reducers/PlanetsReducer';
import starShipsReducer from './Store/Reducers/StarShipsReducer';
import vehiclesReducer from './Store/Reducers/VehicleReducer';
import speciesReducer from './Store/Reducers/SpeciesReducer'

const reducer = combineReducers({
    films: filmReducer,
    people: peopleReducer,
    planets: planetsReducer,
    starShips: starShipsReducer,
    vehicle: vehiclesReducer,
    species: speciesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
