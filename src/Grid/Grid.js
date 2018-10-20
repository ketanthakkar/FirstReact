import React from 'react';
import GridItem from './GridItem';

import './Grid.css';

export default class Grid extends React.Component {
    renderFacts() {
        return this.props.facts.map(item =>
          <GridItem key={item.id} fact={item}/>  
        );
    }
    render() {
        return (
            <section className='grid'>
                {this.renderFacts()}
            </section>
        );
    }
}
