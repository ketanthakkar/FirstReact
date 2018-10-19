import React from 'react';
import './Background.css'

export default class Background extends React.Component {
    render() {
        return (
            <div>
                <div className='backgroundItems stars'></div>
                <div className='backgroundItems alpha'></div>
                <div className='backgroundItems nebula'></div>
            </div>
        );
    }
}