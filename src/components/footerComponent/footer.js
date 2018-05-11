import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Footer extends Component {
    render () {
        return (
            <div>
                <footer>
                    <div className="container has-text-centered">
                        @2018 {this.props.name} All Rights Reserved.
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;