import React from 'react';
import './Rocket.css';

export default class Rocket extends React.Component {
    render() {
        return (
            <div>
                <img src='./shuttle.png' alt='shuttle' className='img' />
            </div>
        );
    }
}