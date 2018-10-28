import React from 'react';

import "./Header.scss";

class Header extends React.Component{
    render(){
        return (
            <nav className="nav">
                <div className="nav-container">
                    <h4>Giulia Sacchetti</h4>
                    <div className="works-link">
                        <a href="#" className="">Work</a>
                        <a href="#" >Contact</a>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;