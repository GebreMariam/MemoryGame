//./components/Header.js
//header component
import React from 'react';
import imgUrl from './PUzkDPp.png';

// import style from "./Header.css";

const Header = (props) => {
    console.log(props);
    const bannerStyle = {
        color: 'gray',
        backgroundImage: `url(${imgUrl})`,
        height: 222,
        textAlign: 'center',
    }

        return (
            
            <div style={bannerStyle} 
            className="row">
                <div className="mt-2 col-sm">
                    <h1>Cicky Game</h1></div>
                <div className="mt-2 col-sm">
                    <h3>Click an Image to Begin!</h3></div>
                <div className="mt-2 pr-o col-sm">
                    <h3 className="mb-0">Score: {props.score} | Top Score: {props.topScore}</h3>
                </div>
               <hr className="text-white" />
               </div>
         
        )
    }
export default Header;
