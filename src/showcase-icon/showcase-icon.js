import React, { Component } from 'react';
import './showcase-icon.css';

class showcaseItem extends Component {
    render() {
        return (
            <div className="showcase-item">
                <img className="showcase-item-image" src={this.props.icon} />
            </div>
        );
    }
}

export default showcaseItem;