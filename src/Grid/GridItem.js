import React from 'react';
import './GridItem.css';

const GridItem = (props) => {
    return (
        <div className='card'>
            <h1 className='title'>{props.fact.title}</h1>
            <article className='fact'>{props.fact.fact}</article>
        </div>
    )
}

export default GridItem;


