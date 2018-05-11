import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    
    render () {
        document.addEventListener('DOMContentLoaded', function () {
            
              // Get all "navbar-burger" elements
              var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
              
              // Check if there are any navbar burgers
              if ($navbarBurgers.length > 0) {
            
                // Add a click event on each of them
                $navbarBurgers.forEach(function ($el) {
                  $el.addEventListener('click', function () {
            
                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);
            
                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
            
                  });
                });
              }
            
            });
        return (
            <div>
                <nav className="navbar is-dark">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">LOGO</a>
                        <button className="navbar-burger burger" data-target="navMenu">
                            <span className="is-active"></span>
                            <span className="is-active"></span>
                            <span className="is-active"></span>
                        </button>
                    </div>
                    <div className="navbar-menu" id="navMenu">
                        <div className="navbar-end">
                            <Link className="navbar-item" to='/'>Home</Link>
                            <Link className="navbar-item" to='/products'>Products</Link>
                            <Link className="navbar-item" to='/contact'>Contact</Link>
                        </div>
                    </div>
                </nav>
                
            </div>
        );
    }
}

export default Header;