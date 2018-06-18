import React,{Component} from 'react';

import './CV.css';
class CV extends Component {

    render() {
        return(
            <div className="cv">
                <h2>General Information</h2>
                <ul>
                    <li><b>Name</b>: Taha Bal</li>
                    <li><b>Nationality</b>: Turkish</li>
                    <li><b>Date of Birth</b>: 11/04/1992</li>
                </ul>
                <h2>Languages</h2>
                <ul>
                    <li><b>Turkish</b> <i className="subtext">-Native</i></li>
                    <li><b>English</b> <i className="subtext">-Fluent</i></li>
                    <li><b>Japanese</b> <i className="subtext">-Fluent</i></li>
                </ul>
                <h2>Technologies</h2>
                <ul>
                    <li>React.js</li>
                    <li>React Native</li>
                    <li>jQuery</li>
                    <li>CSS with SASS</li>
                    <li>HTML5</li>
                    <li>Git</li>
                    <li>Adobe Photoshop CC</li>
                </ul> 
            </div>
        );
    }
}

CV.displayName="CV";

export default CV;