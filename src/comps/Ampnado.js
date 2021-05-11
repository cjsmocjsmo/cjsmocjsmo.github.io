import React from 'react'
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import AmpVid from './images/Ampnadovid.webm'
import Nasa from './images/ampnado.png'

const AmpnadoTxt = ` is a mp3 organizer and music server.  Ampnado
catagorizes your music by Album, Artist, Song, along with playlist
creation and playback.  Ampnado is heavely dependent on id3 tags for
metadata and album cover art. Ampnado has been written 
in python and utilizes the  `

const AmpTwo =  ` while utilizes MongoDB database for data persistence.
HTML, CSS, JQuery, JQuery-Mobile were used for the front-end.  I have
Ampnado running on a Raspberry Pi with a 8TB HHD hat.`

function Ampnado() {
    return (
        <div>
            <div className="col">
            <h3 className="mx-auto text-center" style={{margin: '10px'}}>Ampnado</h3>
            <div className="mx-auto text-center" style={{width: "420px"}}>
                <Player playsInline poster={ Nasa } src={ AmpVid } />
            </div>
            <p className="type-center pt-2">
                <a href="https://github.com/cjsmocjsmo/ampnado">Ampnado</a>
                { AmpnadoTxt }
                <a href="https://www.tornadoweb.org/en/stable/"> python Tornado web framework </a>
                { AmpTwo }
            </p>
        </div>
    </div>
    )
}
export default Ampnado