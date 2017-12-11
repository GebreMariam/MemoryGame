import React from 'react';
import imgUrl from './PUzkDPp.png';

const Footer = (props) => {
    const footStyle = {
        backgroundColor: '#a0522d',
        color: 'gray',
        backgroundImage: `url(${imgUrl})`,
        height: 111,
        textAlign: 'center',
        marginTop: 333
    }
   
    return (
        <footer className="navbar navbar-light fixed-bottom" style={footStyle}>
            <div className="text-white mx-auto">
                <p className="my-0">FOOTER CONTENT</p>
            </div>
        </footer>
    )
}

export default Footer;


