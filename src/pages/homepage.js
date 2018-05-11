import React, { Component } from 'react';

class Homepage extends Component {
    render () {
        return (
            <div>
                <section className="hero is-black is-medium">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-1">
                                HOMEPAGE
                            </h1>
                            <h2 className="subtitle">
                                Some Message
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="section container is-fluid">
                    <h1 className="title has-text-centered">HOMEPAGE</h1>
                    <div className="columns">
                        <div className="column">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="column">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Homepage;