import React from "react";
import { Link } from "react-router-dom";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";


class WaterGym extends React.Component {
    render() {
        return (
            <div style={{"backgroundColor": "#F5AC78"}}>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} className={"task-pottamon-logo"}>
                        <img className={"task-pottamon-logo"} src={"pottamon_text_title.png"} alt={"Pottamon!"}/>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"dancing.png"}>
                            <img className={"task-gym-leader-image"} src={"dancing.png"} alt={"Dancing, the Fire Gym Leader"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        HEYA FRIEND! Huh? We just met? Then that just means we're new friends! Partners even!
                        So since you’re here that means you’ve come for the Exothermic badge huh? Well don’t get too
                        cocky, cause I’m here to put your feet to the fire! I’m Dancing and I specialize in just that!
                        Me and my fire Pottamon are gonna set you ablaze on the dance floor (and maybe the dance floor
                        too while we're at it).
                        <br/><br/>
                        Fire is all about passion and this gym is all about sharing passion! The world is so full of
                        things, so many things that we’ll never get to experience ourselves so that’s why we gotta share
                        it with each other! So with all that said I have a burning question. Before we battle you have
                        to show me what gets the fire dancing behind your eyes! Tell me a hobby of yours so I can know
                        what my new friend does in their spare time. Actually, pitch it to me like a blazing fast ball
                        so I can join in on the fun! What is it? What do you like about it? How’d you start it? How
                        would I start it? You can draw, make a collage, hand me a pamphlet, make a Quibbladex entry,
                        whatever! Just show me something that you’re passionate about! Oh, and make sure there’s at
                        least one picture because everyone knows I have trouble reading with these glasses. While you’re
                        at it, can you submit two hobbies for me? That’s waaay hotter than just one!
                        <br/><br/>
                        But before that I need a dance partner! Oh, are you sweating already? Cause we’re just gettin’
                        started!
                    </p>
                    <p className={"task-intro-p-text"} style={{"gridArea": "meta"}}>
                        <strong>Meta</strong>
                        <br/>
                        This task is to create an entry about 2 hobbies. The house may choose the hobbies to showcase
                        however they see fit (volunteers, popular hobbies, vote, etc.). The entry must at least answer
                        the questions posed above but may go above and beyond if you feel inclined. All entries must
                        contain at least 1 image but can otherwise be formatted however the house would like to present
                        the hobby.
                        <br/><br/>
                        This gym task is due by <a href={"https://www.timeanddate.com/countdown/generic?p0=179&iso=20211025T115959&year=2021&month=10&day=25&hour=11&min=59&sec=59&msg=Gotta%20Catch%20%27Em%20All%3a%20Challenge%20%233%20Countdown"} target={"_blank"} rel={"noreferrer"}>October 25, 11:59pm EDT</a>.
                    </p>
                    <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSfc3AviP1O4XSK4PxgiL3NDb670gaXTZAs6QGtzVDiYGITtUg/viewform?usp=sf_link"}>
                        <button className={"task-submit-button"} >SUBMIT HERE</button>
                    </form>
                </div>
            </div>
        );
    }
}

/*
Tell me a hobby of yours so I can know what my new friend does in their spare time. Actually, pitch it to me like a blazing fast ball so I can join in on the fun! What is it? What do you like about it? How’d you start it? How would I start it? You can draw, make a collage, hand me a pamphlet, make a Quibbladex entry, whatever! Just show me something that you’re passionate about! Oh, and make sure there’s at least one picture because everyone knows I have trouble reading with these glasses. While you’re at it, can you submit two hobbies for me? That’s waaay hotter than just one!

But before that I need a dance partner! Oh, are you sweating already? Cause we’re just gettin’ started!

 */

export default WaterGym;