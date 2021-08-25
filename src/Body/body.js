import React, { Component } from 'react';
import './body.css';
import Card from '../Card/card';
import ShowcaseItem from '../showcase-icon/showcase-icon';
import Races from '../Races/races';
import Engine from '../engine/engine';
import cardIcon1 from '../img/card-icon1.png';
import cardIcon2 from '../img/card-icon2.png';
import cardIcon3 from '../img/card-icon3.png';
import cardIcon4 from '../img/card-icon4.png';
import cardIcon5 from '../img/card-icon5.png';
import cardIcon6 from '../img/card-icon6.png';
import car from '../img/Car.png';
import left from '../img/left.png';
import right from '../img/right.png';
import feature1 from '../img/feature1.png';
import feature2 from '../img/feature2.png';
import feature3 from '../img/feature3.png';


class body extends Component {
    render() {
        return (
            <div className="body">
               <div className="card-wrapper">
                    <Card icon={cardIcon1} text="Start"/>
                    <Card icon={cardIcon2} text="Drive"/>
                    <Card icon={cardIcon3} text="Maintinance"/>
                    <Card icon={cardIcon4} text="Battary"/>
                    <Card icon={cardIcon5} text="Tires"/>
                    <Card icon={cardIcon6} text="Lock"/>
                </div>
                <div className="showcase">
                    <div className="image-bar">
                        <p className="showcase-title">Infiniti Renault</p>
                        <img className="car-image" src={car} alt="car"/>
                        <div className="showcase-slider">
                            <img className="slider-icon slider-icon-right" src={left}/>
                            <img className="slider-icon" src={right}/>
                        </div>
                    </div>
                    <div className="showcase-icon">
                        <ShowcaseItem icon={feature1} />
                        <ShowcaseItem icon={feature2} />
                        <ShowcaseItem icon={feature3} />
                    </div>
                </div>
                <div className="subcards-wrapper">
                    <Races />
                    <Engine />
                </div>
            </div>
        );
    }
}

export default body;