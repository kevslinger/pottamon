import React from "react";
import "../taskHomepage.css";
import Navbar from "../navbar/navbar";
import {Link} from "react-router-dom";


class WaterGym extends React.Component {
    render() {
        return (
            <div style={{"backgroundColor": "#A7DB8D"}}>
                <Navbar/>
                <div style={{"position": "relative"}} className={"task-container"}>
                    <Link to={"/home"} className={"task-pottamon-logo"}>
                        <img className={"task-pottamon-logo"} src={"pottamon_text_title.png"} alt={"Pottamon!"}/>
                    </Link>
                    <figure className={"task-gym-leader-figure"} style={{"gridArea": "figure1"}}>
                        <a href={"spludgiexx.png"}>
                            <img className={"task-gym-leader-image"} src={"spludgiexx.png"} alt={"Spludgie, the Water Gym Leader"}/>
                        </a>
                    </figure>
                    <p className={"task-intro-p-text"} style={{"gridArea": "text"}}>
                        Pssst. Hey, hey you. Psssssssst. I’m looking for some really good tea leaves? Have any good
                        recommendations? Er, you’re here for a badge? Well then.
                        <br/><br/>
                        I’m Spludgie - and I specialize in grass type Pottamon! My dream is to open up the best tea shop
                        in the Clawla region with the help of my leafy grass type companions.
                        <br/><br/>
                        Oh, right, the gym challenge. To beat me and earn the Poaceae Badge, I would like you to go
                        outside on a nature walk. Find me 3 cool grass type Pottamon and share your notes about what you see.
                        These can be plants or animals that you find on this walk. Be sure to include a photo of your
                        Pottamon, its name, describe/illustrate its habitat, any cool distinguishing markings, its
                        favorite kind of tea, and any special moves it might have! And if you happen to find tea leaves
                        on your nature walk... you know where to find me.
                    </p>
                    <form className={"task-submit-form"} style={{"gridArea": "submit"}} method={"get"} target={"_blank"} rel={"noreferrer"} action={"https://docs.google.com/forms/d/e/1FAIpQLSe--LiE_b_8VnBo24ZKYtz0dWLv58_fpMCJpwgxTobMlw4v4A/viewform"}>
                        <button className={"task-submit-button"} >SUBMIT HERE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default WaterGym;