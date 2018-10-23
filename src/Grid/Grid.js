import React from 'react';
import GridItem from './GridItem';

import './Grid.css';

export default class Grid extends React.Component {
    updateClicked(id) {
        this.props.updateClicked(id);
    }
    renderFacts() {
        return this.props.facts.map(item =>
          <GridItem 
            key={item.id} fact={item} 
            updateClicked={this.updateClicked.bind(this)}/> 
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
