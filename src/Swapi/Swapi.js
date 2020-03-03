import React from 'react';
import './Swapi.scss';
import {connect} from 'react-redux'

import NavBar from '../Component/NavBar/Navbar';
import Films from '../View/Films/Film';
import Contact from '../View/Contact/Contact';
import NotFound from '../View/NotFound/NotFound';
import Home from '../View/Home/Home';

import {Switch, Route} from 'react-router-dom';
import * as actionCreators from '../Store/Action/ActionCreators/ActionCreators_FETCH'

function Swapi(props) {

    
props.FetchData('films');
props.FetchData('people');
props.FetchData('starships');
props.FetchData('species');
props.FetchData('vehicles');
props.FetchData('planets');
            
    

    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Films' component={Films}/>
                <Route path='/Contact' component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        FetchData: (apiKeyWord) => dispatch(actionCreators.getData(apiKeyWord))
    }
}

export default connect(null, mapDispatchToProps)(Swapi)
