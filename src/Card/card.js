import React, { Component } from 'react';
import './card.css';

class card extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-icon" src={this.props.icon} alt="icon" />
                <p className="card-text">{this.props.text}</p>
            </div>
        );
    }
}

export default card;