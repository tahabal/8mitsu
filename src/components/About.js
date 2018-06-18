import React,{Component} from 'react';
import './About.css';



class About extends Component {

    render() {
        return(
            <div className="about">
                
                <p>
                    I am Taha Bal, a Frontend Developer based in Istanbul/Turkey.
                </p>
                <p>
                    Currently working as the sole Frontend Dev of <a href="https://yaz.com.tr/">Yaz Bilgi Sistemleri</a>, my responsibilities mostly
                    consists of writing/checking/fixing everything Javascript and CSS related in the office, as well as making dissatisfied grunts at badly written codebases.
                </p>
            </div>
        );
    }
}

About.displayName = 'About';
export default About;