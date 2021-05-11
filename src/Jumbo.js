import React from 'react';
import NASA from './comps/images/nasa.jpg'
import Resume from './comps/images/resume.pdf'
import Jumbotron from 'reactstrap/lib/Jumbotron';

const JumboStyle = {
    backgroundImage: 'url(' + NASA + ')',
    backgroundSize: "cover",
    color: "black",
}

function Jumbo () {
    return (
        <div id={"home"}>
            <Jumbotron style={JumboStyle}>
                <h1 className={"display-4"} >Charlie Smotherman</h1>
                <a
                    href={ Resume }
                    type="button" 
                    className="btn btn-danger btn-xlg ">HIRE ME
                </a>
            </Jumbotron>
        </div>
    )
}

export default Jumbo