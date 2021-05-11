import React from 'react'
import Me from './images/me.jpg'
import { Button, UncontrolledCollapse } from 'reactstrap'

const About1Txt = `Graduated from Denison High School Denison Texas.
I went on to graduate with an Associates Degree in Nursing from Indiana
State University in Terra Haute Indiana.  I have no formal Computer Science
education, I am completely self taught so let me tell you about my open source
journey.  It all started one day when I had just installed my
Windows XP service-pack 2 updates (2001) and I was looking around for a
way to organize all of my mp3s.  After looking around the net for awhile 
I found `

const About3Txt = ` so I started reading the docs and found out to get Ampache up
and running you needed to install Apache, MySql, and PHP on a Linux machine.
As I found out Apache, MySql and PHP couldnt be installed on Windows back in those days
so I had to make a decision stay with Windows and forget using Ampache or give linux a try.`

const About4Txt = `I found and tried a little known linux distribution called
Ubuntu 4.10 (Warty Warthog) it was billed as being one on the most user friendly linux
flavors, so I gave it a try.  I have been using either Debian or Ubuntu ever since.  Got Ampache
installed and running in about a day after learning some basic commandline tools such as ls
mkdir mv.  I liked Ubuntu so much I became a community member, at this same time I was also active
in the Ampache community.  Ampaches lead developer jokingly said to me one day, it sure would be nice
to be able to apt-get install Ampache so I took that as my que to get Ampnado into the Debian Archives.
So I went to work learning the Ubuntu/Debian ecosystems and packaging tools such as dpkg, apt, deb,
pbuilder, cowbuilder, svn, svn-buildpackage (Debian Python Packaging Team before git), git and
git-buildpackage, bzr and bzr-buildpackage (`

const About5Txt = `), Ubuntus launchpad bug tracker and Debians email bug tracker.
While I was learning this I was applying what I learned to the Ampache project and
actually got Ampache accepted by the world famous Debian FTP Masters and had it included
into the Debian archives.  Most if not all the packages in the Debian archive are synced over to
Ubuntu.`

const About6Txt = `Up to this point to get any of my bug fixes or new packages
uploaded to the archive I needed a Ubuntu/Debian developer with upload permissions or a
Master Of The Universe repository (MOTU).  This grew tiresome so I applied for and was
accepted into the ranks of MOTU (126 people world wide).  That allows me to work on and
upload any of about 20,000 packages to include any NEW package I feel the community would
benifit from.  But with great power comes great responsibility.  As MOTU we are gatekeepers
to the archive tasked with not only uploading bug fixes and new package we also keep
garbage out and get non-maintained packages removed.  During this time I was introduced
to Python, like any new programer I was having a hard time thinking of a project that
would help teach me.  So I thought why not reproduce Ampache except with a different
technology stack like HTML5, CSS, JQuery, JQuery-Mobile, MongoDB, python Tornado and make
it into an SPA.  And so Ampnado was born.`

function About() {
    return (
        <div>
            <div id="about" className="container container-fluid pt-2" >
                <h2 className="p-3 text-center">About</h2>
                    <img className="aboutImg img-responsive mx-auto d-block" style={{width: "420px", marginBottom: 20}} src={ Me } alt=""></img>
                <p>
                    {About1Txt}
                    <a href="https://Ampache.org">Ampache.</a>
                </p>
            </div>
            <div id="about" className="container container-fluid pt-2" >
                <UncontrolledCollapse toggler="togglethree">
                    <p className="type-center p-2">
                    { About3Txt }
                    </p>
                    <p className="type-center p-2"> 
                    { About4Txt }
                    <a href="https://launchpad.net/ubuntu">Ubuntu</a>/<a href="https://launchpad.net/">Launchpad</a>
                    { About5Txt }
                    </p>
                    <p className="type-center p-2">
                    { About6Txt }
                    </p>
                </UncontrolledCollapse>
            </div>
            <div className="wrapper text-center pb-3">
                <Button id="togglethree" color="primary" size="lg">Continue Reading</Button>
            </div>
		</div>
    )
}

export default About