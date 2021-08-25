import React, { Component } from 'react';
import './item.css';

class item extends Component {
    render() {
        return (
            <div className="item">
                <img className="item-img" src={this.props.img} alt="home-logo" />
                <p className="item-text">{this.props.title}</p>
            </div>
        );
    }
}

export default item;