import React from 'react';
import '../css/socialMedia.css';

const SocialMedia  = () => {
    return (
        <div className="socialMedia">
            <a href="https://github.com/AlexCassell" target="_blank" rel="noopener noreferrer"><button className="socialMedia__icons socialMedia__icons__github"></button></a>
            <a href="https://www.linkedin.com/in/alexcassell/" target="_blank" rel="noopener noreferrer"><button className="socialMedia__icons socialMedia__icons__linkedIn"></button></a>
            <a href="https://www.facebook.com/simulism.net" target="_blank" rel="noopener noreferrer"><button className="socialMedia__icons socialMedia__icons__facebook"></button></a>
        </div>
    );
}

export default SocialMedia;