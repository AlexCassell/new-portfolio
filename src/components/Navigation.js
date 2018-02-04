import React from 'react';
// import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/header.css';
import SocialMedia from '../components/SocialMedia';
const Navigation = () => {
    return (
        <div>
            <div className="header">
                <div className="header__menu">
                    <div className="header__menu__links"><Link to="/" className="Nav-link">About</Link></div>
                    {/* <div className="header__menu__links"><Link to="/blog/" className="Nav-link">Blog</Link></div> */}
                    <div className="header__menu__links"><Link to="/projects" className="Nav-link">Projects</Link></div>
                    <div className="header__menu__links"><Link to="/contact/" className="Nav-link">Contact</Link></div>
                </div>
            </div>
            < SocialMedia />
        </div>
    );
};
export default Navigation;
