import React, { Component } from 'react';
import './sidebar.css';
import Item from '../Item/item';
import Schedul from '../schedul/schedul';
import logo from '../img/Logo.png'
import home from '../img/home.png';
import calc from '../img/calculator.png';
import category from '../img/category.png';
import group from '../img/group.png';
import payment from '../img/payment.png';
import settings from '../img/settings.png';
import ellipseRed from '../img/Ellipse red.png';
import ellipseBlue from '../img/Ellipse blue.png';
import ellipseGreen from '../img/Ellipse green.png';
import user from '../img/user-img.png';
import bottom from '../img/bottom.png';

class sidebar extends Component {
    render() {
        return (
            <div className="sidebar-con">
                <div className="log-wrapper">
                    <img className="logo" src={logo} alt="logo" />
                    <p className="logo-text">iffee</p>
                </div>
                <p className="menu">Menu</p>
                <Item img={home} title='Home'/>
                <Item img={category} title='Garage'/>
                <Item img={payment} title='Service Menu'/>
                <Item img={group} title='Racers'/>
                <Item img={calc} title='Calculator'/>
                <Item img={settings} title='Settings'/>
                <p className="race-schedul">Scheduled Races</p>
                <Schedul img={ellipseBlue} title='MotoGP 2022'/>
                <Schedul img={ellipseRed} title='Dynamics 22'/>
                <Schedul img={ellipseGreen} title='Olympics'/>
                <div className="user">
                    <img className="user-img" src={user} alt="user-img"/>
                    <p className="user-name">Killua</p>
                    <img className="user-icon" src={bottom} alt="user-icon" />
                </div>
            </div>
        );
    }
}

export default sidebar;