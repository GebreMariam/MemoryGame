//./components/ClickyThing.js
//component for individual images
import React from 'react';

const ClickyThing = (props) => {
 
    console.log(props)

    return (
        <div className="my-2 mx-auto" id="imageBox">
                { props.images.map(image => (
                    <span className="col-lg-4" key={image.id}>
                      <a href="/#" onClick={ ()=> props.handleClick(image.id) }><img className="img img-responsive p-2" height={123} width={208} src={image.uri} alt={image.id}/></a>
                    </span>
                    ))
                }
        </div>
    )
    }

export default ClickyThing;
