import React from 'react'
import AlphaTreePic from './images/alphatreeSite.png'
import { Container, Row, Col } from 'reactstrap'

const AlphaTree1Txt = ` is designed to give its owner a web presence, and to mainly
generate telephone leads.  The website was built using HTML5 and the BootStrap CSS framework.
Golang was used to write the HTTP server and a `

const AlphaTree2Txt = ` was used to create the 17MB container image that is being
hosted on `

function AlphaTree() {
    return (
    <Container>    
        <Row>
            <Col>
                <h3 className="mx-auto text-center">AlphaTree</h3>
                <img className="p-2 alphatreeImg mx-auto d-block" src={ AlphaTreePic } alt=""></img>
                <span style={{height: 20}}></span>
            
                <p className="type-center pt-2">
                    <a href="https://aqueous-shore-04475.herokuapp.com/alphatree">AlphaTree Service</a>
                    { AlphaTree1Txt }
                    <a href="https://github.com/cjsmocjsmo/alphatreedoc/blob/master/Dockerfile">multi-stage docker build</a>
                    { AlphaTree2Txt }
                    <a href="https://www.heroku.com/" >Heroku Cloud Services.</a>
                </p>
                <p className="type-center">
                    <a href="https://aqueous-shore-04475.herokuapp.com/alphatree">https://aqueous-shore-04475.herokuapp.com/alphatree</a>
                    <br />
                    <a href="https://github.com/cjsmocjsmo/alphatreedoc">https://github.com/cjsmocjsmo/alphatreedoc</a>
                </p>
            </Col>
        </Row>
    </Container>
    )
}

export default AlphaTree