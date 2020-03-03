import React from 'react';
import './Home.scss';
import Cards from '../../Component/Cards/Cards';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return (
        <div>
            <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal
                        space of its parent.</p>
                </div>
            </div>
        </div>
         <Cards />
        </div> 
    )
}


export default Home
