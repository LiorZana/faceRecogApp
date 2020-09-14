import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {

    return (
        <div>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 128, width: 128 }} >
                <div className="Tilt-inner"> <img id='logo' src={brain} alt='logo'/> </div>
                <div className='icon-credit dim'>Icon made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </Tilt>
        </div>
    );
}


export default Logo;