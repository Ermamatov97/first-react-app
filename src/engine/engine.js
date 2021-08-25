import React, {Component} from 'react';
import './engine.css';
import engineImage from '../img/engine.png';

class engine extends Component {
    render() {
        return (
            <div className="engine">
                <img className="engine-img" src={engineImage} />
            </div>
        );
    }
}

export default engine;