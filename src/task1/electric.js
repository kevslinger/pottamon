import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class ElectricGym extends React.Component {
    render() {
        return (
            <div style={{"backgroundColor": "#FAE078"}}>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} className={"task-pottamon-logo"}>
                        <img className={"task-pottamon-logo"} src={"pottamon_text_title.png"} alt={"pottamon"}/>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"xancanstand.png"}>
                            <img className={"task-gym-leader-image"} src={"xancanstand.png"} alt={"Xan, the Electric Gym Leader"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        &#9889;MWAHAHAHA!&#9889; Welcome to the toughest gym yet! This challenge will overload your
                        circuit boards! ECCLETRIXITY! The Type all witches and wizards are weak against!
                        <br/><br/>
                        How does it work? Your only hope is to interview any muggleborns you may have in your class.
                        We’re all familiar with the way most magical folk are oblivious to muggle technology and if they
                        were to attempt to describe how those kinds of mundane objects work, the results would
                        be <i>hilarious</i>. For this challenge, we want to hear from witches and wizards who spent their
                        first 11 years in the modern muggle world during this digital age. We want to know, from their
                        perspective, about all the things in the Wizarding world that have helped them acclimate and
                        adjust to being unplugged. What spells, potions, and arcane artifacts have taken the place of
                        their phones and tablets and internet (and light bulbs and refrigerators and A/C and cars and . . .)?
                        <br/><br/>
                        I’ll need an interview from one or more of these students, with four total examples for specific
                        magical substitutions of their muggle world technologies, and photos, drawings or digital art
                        are encouraged. Each magical substitution should touch on what it is, how it fills the gap left
                        by an absent technology, and why the student needed this substitution or how they feel about its
                        replacement while living at Hogwarts.
                        <br/><br/>
                        Now! Get amped! It’s challenge time!
                    </p>
                    <p className={"task-intro-p-text"} style={{"gridArea": "meta"}}>
                        <strong>Meta</strong>
                        <br/>
                        This task is a writing assignment to be done in the style of an interview, with an interviewer
                        asking questions of one or more muggleborn Hogwarts students about getting used to a new culture
                        that doesn’t use electricity.  The interviewee(s) must mention four magical objects, spells or
                        potions or other things found in the Wizarding world that they have discovered work as
                        replacements for real world technologies, as well as how good or poorly the substitution works
                        and how they feel about it.
                        <br/><br/>
                        This gym task is due by <a href={"https://www.timeanddate.com/countdown/generic?iso=20211011T235959&p0=179&msg=Gotta+Catch+%27Em+All%3A+Challenge+%231+Countdown&font=cursive"} target={"_blank"} rel={"noreferrer"}>October 11, 11:59pm EDT</a>.
                    </p>
                    <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSeNqBgtBiczLutFa7Zd-KYPT3ATplKxD4scLlPoR2pjDK5kkw/viewform?usp=sf_link"}>
                        <button className={"task-submit-button"}>SUBMIT HERE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ElectricGym;