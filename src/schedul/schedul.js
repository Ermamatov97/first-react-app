import React, { Component } from 'react';
import './schedul.css';

class schedul extends Component {
    render() {
        return (
            <div className="schedul">
                <img className="schedul-img" src={this.props.img} alt="ellipse" />
                <p className="schedul-text">{this.props.title}</p>
            </div>
        );
    }
}

export default schedul;