import React, { Component } from 'react';
import './Counter.css';


export default class Counter extends Component {

    render() {
        const style = {
            animation: 'typing 0.3s steps('+this.props.Text.length+', end),blink-caret .75s step-end infinite'
        };

        return(
            <div className="counter">
                <p className="counter-text" style={style}>
                    {this.props.Text}
                </p>
            </div>
        );
    }
}