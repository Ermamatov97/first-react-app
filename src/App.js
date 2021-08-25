import React, {Component} from 'react';
import Body from './Body/body';
import Navbar from './Navbar/navbar';
import Sidebar from './Sidebar/sidebar';
import './App.css';

export default class App extends Component {
    render(){
        return (
            <div className = "container">
                <Sidebar />
               <div className = "body-wrapper">
                    <Navbar />
                    <Body />
               </div>
            </div>
        )
    }
}