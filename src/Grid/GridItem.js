import React from 'react';
import './GridItem.css';
import Badge from './Badge';
import Explore from './Explorer';

const GridItem = (props) => {
    return (
        <div className='card' onClick={() => props.updateClicked(props.fact.id)}>
            {props.fact.clicked ? <Explore /> : <Badge />}
            <h1 className='gridtitle'>{props.fact.title}</h1>
            <article className='fact'>{props.fact.fact}</article>
        </div>
    )
}

export default GridItem;


