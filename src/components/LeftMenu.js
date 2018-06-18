import React, { Component } from 'react';

import './LeftMenu.css';

import MenuItem from './MenuItem';


export default class LeftMenu extends  Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    setActive() {

    }

    render() {
        return(
            <div className="leftMenuContainer">
                <div className="leftMenu">
                    <MenuItem Text="About" to='/about'/>
                    <MenuItem Text="Contact" to='/'/>
                </div>
            </div>  
        );
    }
}