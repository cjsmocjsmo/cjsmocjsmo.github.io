import React from 'react'
import MySvg from './images/Dia.svg'
import MovieGoPic from './images/mediacenter2.png'
import { Button, Container, Row, Col, UncontrolledCollapse } from 'reactstrap'

const MovieGo1Txt = ` was written in `

const MovieGo2Txt = ` and is primarily meant to be used on the `

const MovieGo3Txt = `.  MediaCenter was written to solve three
main problems.  Problem #1 is the inherent limited storage capability
of the Raspberry Pi (64GB).  This is unacceptable as I have 8TB of video
and audio file to organize and serve up so some type of streaming solution
is needed.  Problem #2 the crappy video playback from most if not all CPU
based players out in the wild.  `

const MovieGo4Txt = `  is a GPU video player that was written in
C++ especially for the Raspberry Pi's  Broadcom VideoCore chipset with near DVD
video quality playback in my opinion. Problem #3 my poor TV is dumber than a box
of rocks and has no smart capabilities, this is where the Raspberry Pi comes in.
It is a cheap way of turning my dumb TV into a "smarter" one.  MediaCenter's is
a natural progression of MovieGo and TvGo and is a mashup of both projects.  
The front end was developed with HTML5, Bootstrap4, JQuery.  While `

const MovieGo5Txt = `  and GoLang organizes and serves up your media files.  
MovieGo can be accessed from any device that has a web browser, I find that an
old phone can be used as a MediaCenter remote control.`

function MediaCenter() {
    return(
    <div>
        <Container className="themed-container" fluid="lg">
            <Row>
                <Col>
                    <h3 className="mx-auto text-center">MediaCenter</h3>
                    <img className="p-2 movieGoTimeImg mx-auto img-fluid" style={{width: "420px"}} src={ MovieGoPic } alt=""></img>
                    <p className="type-center pt-2">
                        <a href="https://github.com/cjsmocjsmo/MediaCenter">MediaCenter</a>
                        { MovieGo1Txt }
                        <a href="https://golang.org/">Golang</a>
                        { MovieGo2Txt }
                        <a href="https://www.raspberrypi.org/">Rasberry Pi</a>
                        { MovieGo3Txt }
                    </p>
                        <UncontrolledCollapse toggler="#togglertwo">
                            <a href="https://github.com/popcornmix/omxplayer">OmxPlayer</a>
                            { MovieGo4Txt }
                            <a href="https://www.mongodb.com/">MongoDB</a>
                            { MovieGo5Txt }
                            <img className="p-2 movieGoTimeImg mx-auto img-fluid" style={{width: "75%"}} src={ MySvg } alt=""></img>
                        </UncontrolledCollapse>
                        <Button id='togglertwo' style={{margin: '10px'}} color="primary" size="lg" active>Continue Reading</Button>
                </Col>
            </Row>
        </Container>
    </div>
    )
}
export default MediaCenter