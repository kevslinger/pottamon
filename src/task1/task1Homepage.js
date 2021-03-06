import React from "react";
import { Link } from "react-router-dom";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";


class Task1Homepage extends React.Component {
    render() {
        return (
          <div style={{"backgroundColor": "#3c5aa6"}}>
              <Navbar/>
              <div style={{"position": "relative"}} className={"task-container"}>
                  <Link to={"/home"} className={"task-pottamon-wand"}>
                      <img className={"task-pottamon-wand"} src={"pottamon_wand_logo.png"} alt={"Pottamon!"}/>
                  </Link>
                  <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                      <a href={"professor_squash.png"}>
                        <img className={"task-gym-leader-image"} src={"professor_squash.png"} alt={"Professor Squash"}/>
                      </a>
                    <figcaption className={"task-gym-leader-caption"}>Ready for your first challenge?</figcaption>
                </figure>
                  <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                      Welcome, intrepid explorers, to the first steps of your Pottamon journey! Let’s get you started on
                      your path to becoming the next Pottamon Master!
                      <br/><br/>
                      ...oh? You don’t know where to go? Well, er, I suppose I could give you a <a href={"https://i.imgur.com/yy1fPhf.png"} target={"_blank"} rel={"noreferrer"}>map</a>?
                      No? You would prefer some links to your destinations? Okay, sounds weird but if that’s what you’d
                      like... (kids these days don’t know how to appreciate the novelty in doing things themselves).
                      Ahem, excuse me.
                      <br/><br/>
                      The closest gyms to us would be of the Rock, Water, and Electric varieties. If you head up Route 7
                      you’ll hit the Rock gym in no time! The gym leader, MJ, has a fortitude tougher than diamonds.
                      You’ll need to be bold if you want to defeat her!
                      <br/><br/>
                      If you decide to face the Water gym, you’ll need only to go down the coast along Route 9 to Seafare
                      Port. But be warned, she tends to speak exclusively in dad jokes. I hear her favorite show is
                      Galavantula, though I'm trying to get her hooked on Dancing with the Staryus...
                      <br/><br/>
                      And if you dare, you might chance challenging the electric gym leader off of Route 11 in Faraday City.
                      Rumor has it that the gym leader keeps a pack of electric alzapcas... best to be careful, I’ve
                      read that petting their fur is enough to give you quite the static shock!
                      <br/><br/>
                      Good luck to all of Team Gryffindor, Team-Hufflepuff and Team Slytherin! Be sure to have your
                      representatives update me on your badge progress
                      by <a href={"https://www.timeanddate.com/countdown/generic?iso=20211011T235959&p0=179&msg=Gotta+Catch+%27Em+All%3A+Challenge+%231+Countdown&font=cursive"} target={"_blank"} rel={"noreferrer"}>October 11, 11:59pm EDT</a>.
                  </p>
                <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure4"}}>
                    <Link to={"/rock"}>
                        <img className={"task-gym-leader-image"} src={"mj.png"} alt={"Rock Gym Leader Mjenious"}/>
                    </Link>
                    <figcaption className={"task-gym-leader-caption"}>Mjenious, the Rock Gym Leader</figcaption>
                </figure>
                <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure5"}}>
                    <Link to={"/water"}>
                        <img className={"task-gym-leader-image"} src={"eldis.png"} alt={"Water Gym Leader Eldis"}/>
                    </Link>
                    <figcaption className={"task-gym-leader-caption"}>Eldis, the Water Gym Leader</figcaption>
                </figure>
                <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure8"}}>
                    <Link to={"/electric"}>
                        <img className={"task-gym-leader-image"} src={"xancanstand.png"} alt={"Electric Gym Leader XanCanStand"}/>
                    </Link>
                    <figcaption className={"task-gym-leader-caption"}>XanCanStand, the Electric Gym Leader</figcaption>
                </figure>
                  <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSeNqBgtBiczLutFa7Zd-KYPT3ATplKxD4scLlPoR2pjDK5kkw/viewform?usp=sf_link"}>
                    <button className={"task-submit-button"}>SUBMIT HERE</button>
                  </form>
                <p className={"task-footer task-footer-left"}><br/><br/>Proudly created by Ravenclaw House.</p>
              </div>
          </div>
        );
    }
}

export default Task1Homepage;