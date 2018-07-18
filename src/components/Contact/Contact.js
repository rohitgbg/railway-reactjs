import React, { Component } from 'react';

class Contact extends Component {
    render(){
        return(
        <div className="container">
        <br/>
            <div className="jumbotron">
                <h1 className="display-3">Hi, this is Rohith GB</h1>
                <p className="lead">You can contact me through <a href="https://www.linkedin.com/in/rohithgb/"> LinkedIn </a> or <a href="https://www.facebook.com/rohitgbg"> Facebook </a></p>
                <p className="lead"> My <a href="https://github.com/rohitgbg?tab=repositories"> github repositories </a>  </p>
            </div>
        </div>
        );
    }
};

export default Contact;