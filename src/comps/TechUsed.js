import React from 'react'
import { Container } from 'reactstrap'
import HTML from './images/HTML_Logo.png'
import BootStrap from './images/bootstrap.png'
import GoLang from './images/golang2.jpg'
import Alpine from "./images/alpine.png"
import Docker from "./images/docker.png"
import Heroku from "./images/heroku-logo.jpg"
import CSS from "./images/CSS3.png"
import JQUery from "./images/jquery-logo.png"
import JQMobile from "./images/jquery_mobile.png"
import PYthon from "./images/python-logo.png"
import MongoDB from "./images/mongodb.png"
import MyReact from "./images/react.png"
import AWS from './images/aws.png'

function TechUsed () {
    return (
        <div>
            <h1 style={{margin: "10px"}}>Technologies Used</h1>
            <div>
                <h3 style={{margin: "10px"}}>Ampnado</h3>
                <Container>
                    <a href="https://html.spec.whatwg.org/multipage/">
                        <img class="ampnadoIcons" src={ HTML } alt=""></img>
                    </a>
                    <a href="https://www.w3.org/Style/CSS/">
                        <img class="ampnadoIcons" src={ CSS } alt=""></img>
                    </a>
                    <a href="https://jquery.com/">
                        <img class="ampnadoIcons" src={ JQUery } alt=""></img>
                    </a>
                    <a href="https://www.python.org/">
                        <img class="ampnadoIcons" src={ PYthon } alt=""></img>
                    </a>
                    <a href="https://www.docker.com/">
                        <img src={ Docker } alt=""></img>
                    </a>
                    <a href="https://jquerymobile.com/">
                        <img class="ampnadoIcons" src={ JQMobile } alt=""></img>
                    </a>
                    <a href="https://www.mongodb.com/">
                        <img class="ampnadoIcons" src={ MongoDB } alt=""></img>
                    </a>
                </Container>
                <Container>
                    <h3 style={{margin: "10px"}}>MediaCenter</h3>
                    <a href="https://html.spec.whatwg.org/multipage/">
                        <img src={ HTML } alt=""></img>
                    </a>
                    <a href="https://getbootstrap.com/">
                        <img src={ BootStrap } alt=""></img>
                    </a>
                    <a href="https://golang.org/">
                        <img src={ GoLang } alt=""></img>
                    </a>
                    <a href="https://alpinelinux.org/">
                        <img src={ Alpine } alt=""></img>
                    </a>
                    <a href="https://www.docker.com/">
                        <img src={ Docker } alt=""></img>
                    </a>
                    <a href="https://www.mongodb.com/">
                        <img class="ampnadoIcons" src={ MongoDB } alt=""></img>
                    </a>
                </Container>
                <Container>
                    <h3 style={{margin: "10px"}}>AlphaTree</h3>
                    <a href="https://html.spec.whatwg.org/multipage/">
                        <img src={ HTML } alt=""></img>
                    </a>
                    <a href="https://getbootstrap.com/">
                        <img src={ BootStrap } alt=""></img>
                    </a>
                    <a href="https://golang.org/">
                        <img src={ GoLang } alt=""></img>
                    </a>
                    <a href="https://alpinelinux.org/">
                        <img src={ Alpine } alt=""></img>
                    </a>
                    <a href="https://www.docker.com/">
                        <img src={ Docker } alt=""></img>
                    </a>
                    <a href="https://www.heroku.com/home">
                        <img src={ Heroku } alt=""></img>
                    </a>
                </Container>
                <h3 style={{margin: "10px"}}>This Website</h3>
                <Container className="themed-container" fluid="sm">
                    <a href="https://html.spec.whatwg.org/multipage/">
                        <img src={ HTML } alt=""></img>
                    </a>
                    <a href="https://getbootstrap.com/">
                        <img src={ BootStrap } alt=""></img>
                    </a>
                    <a href="https://golang.org/">
                        <img src={ GoLang } alt=""></img>
                    </a>
                    <a href="https://alpinelinux.org/">
                        <img src={ Alpine } alt=""></img>
                    </a>
                    <a href="https://www.docker.com/">
                        <img src={ Docker } alt=""></img>
                    </a>
                    <a href="https://aws.amazon.com/">
                        <img src={ AWS } alt=""></img>
                    </a>
                    <a href="https://reactjs.org/">
                        <img src={ MyReact } alt=""></img>
                    </a>
                </Container>
            </div>
        </div>
    )
}
export default TechUsed