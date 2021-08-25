import React, { Component } from 'react';
import './races.css';
import racesImage from '../img/races.png';

class races extends Component {
    render() {
        return (
            <div className="races">
                <img className="races-image" src={racesImage} />
            </div>
        );
    }
}


export default races;