import React from 'react';
import './Cards.scss';
import Card from './Card/Card';
import {connect} from 'react-redux';

function Cards(props) {

    const cards = props
        .films
        .map((item, index) => {
            return <Card
                key={index}
                title={item.title}
                opening_crawl={item.opening_crawl}
                release_date={item.release_date}/>
        })

    return (
        <div>
            {cards}
        </div>
    )
}

const mapStateToProps = state => {
    return {films: state.films.filmsDataResult}
}

export default connect(mapStateToProps)(Cards)
