import React, {useEffect} from 'react';
import './Swapi.scss';
import {connect} from 'react-redux'

import NavBar from '../Component/NavBar/Navbar';
import Films from '../View/Films/Film';
import Contact from '../View/Contact/Contact';
import NotFound from '../View/NotFound/NotFound';
import Home from '../View/Home/Home';
import SignUp from '../Component/SignUp/SignUp'

import {Switch, Route} from 'react-router-dom';
import * as actionCreators from '../Store/Action/ActionCreators/ActionCreators_FETCH'

function Swapi(props) {

    const {FetchData} = props

        useEffect(() => {
            FetchData('films')
            FetchData('people')
            FetchData('planets')
            FetchData('species')
            FetchData('vehicles')
            FetchData('starships')
        }, [FetchData])
       

    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Films' component={Films}/>
                <Route path='/Contact' component={Contact}/>
                <Route path='/SignUp' component={SignUp}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        FetchData: (apiKeyWord) => dispatch(actionCreators.getData(apiKeyWord))
    }
};

export default connect(null, mapDispatchToProps)(Swapi)
