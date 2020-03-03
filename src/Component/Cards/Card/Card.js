import React from 'react'
import './Card.scss'
import 'bootstrap/dist/css/bootstrap.css';

function Card(props) {
    return (
        <div className='cardContainer'>
            <div className="card text-center">
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body">
                    <p className="card-text">{props.opening_crawl}</p>
                </div>
                <div className="card-footer text-muted">
                    {props.release_date}
                </div>
            </div>
        </div>
    )
}

export default Card
