import React,{Component} from 'react';
import {IoSocialGithub,IoIosTelephone,IoIosEmail,IoSocialLinkedin} from 'react-icons/lib/io';
import './Contact.css';



class Contact extends Component {

    render() {
        return(
            <div className="contact">
                <h3 className="mobileTitle">Taha Bal, Frontend Dev.</h3>
                <p>You can contact me via one of these stuff, or be creative and send a pidgeon.</p>
                <div className="socialBox">
                    <a href="https://github.com/tahabal" className="social">
                        <IoSocialGithub size="50" />
                    </a>
                    <a href="https://www.linkedin.com/in/tahabal/" className="social">
                        <IoSocialLinkedin size="50" />
                    </a>
                    <a href="tel:+905384048615" className="social">
                        <IoIosTelephone size="50" />
                    </a>
                    <a href="mailto:taha@8mitsu.io" className="social">
                        <IoIosEmail size="50" />
                    </a>
                </div>
            </div>
        );
    }
}

Contact.displayName = 'Contact';

export default Contact;