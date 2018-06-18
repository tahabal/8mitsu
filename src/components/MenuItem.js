import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShuffleText from 'shuffle-text';
import './MenuItem.css';


export default class MenuItem extends Component {
    constructor(props){
        super(props);
        this.state= {text: this.props.Text};
        this.ref = React.createRef();
    }

    componentDidMount() {
        const node = this.ref.current;
        var text = new ShuffleText(node);
        text.start();
    }

    render() {

        return(
            <Link to={this.props.to} className="menuItem">
                <h3 ref={this.ref}>
                    {this.props.Text}
                </h3>
            </Link>
        );
    }
}
