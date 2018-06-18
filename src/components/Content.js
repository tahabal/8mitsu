import React, { Component } from 'react';
import {  Route } from 'react-router-dom';
import AnimatedRoutes from "./AnimatedRoutes";
import About from './About';
import Projects from './Projects';
import CV from './CV';
import Contact from './Contact';
import './Content.css';


export default class Content extends Component {
    render(){
        return(
            <div className="content-wrapper">
                <AnimatedRoutes>
                    <Route exact path='/' component={Contact}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/cv' component={CV}/>
                    <Route exact path='/about' component={About}/>
                </AnimatedRoutes>
            </div>
        );
    }
}