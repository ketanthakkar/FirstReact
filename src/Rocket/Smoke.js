import React from 'react';
import './Smoke.css';

export default class Smoke extends React.Component {
    render() {
        return (
            <div className='smoke'>
                <video className='video' autoPlay loop src='/smoke.mov' />
            </div>
        );
    }
}