import React, { Component } from 'react';
import './navbar.css';
import notification from '../img/notif.png';
import person from '../img/person.png';
import user from '../img/user-img.png';
import lupa from '../img/lupa.png';

class navbar extends Component {
    render() {
        return (
            <div className = "nav-container">
                <input type="text" className="search input" placeholder="Search for a race, car or racer"/>
                <img className="lupa" src={lupa} />
                <select className="choose input">
                    <option className="option">Choose a car</option>
                    <option className="option">Choose a car</option>
                    <option className="option">Choose a car</option>
                    <option className="option">Choose a car</option>
                </select>
                <img className="notif" src={notification} alt="notif" />
                <img className="person" src={person} alt="person" />
                <img className="user-oval" src={user} alt="user-oval" />
            </div>
        );
    }
}

export default navbar;