import React from "react"
import circle_bg from "../assets/images/circle_bg.jpg"
import landingpage_img from "../assets/images/todo-img.png"
import yellow_bg from "../assets/images/yellow-bg.jpeg"
import {Link} from 'react-router-dom';


const LandingPage =()=>{
    return (
       <div className="containter">
        <div className="landing-page">
            <div className="langing-yellow-bg"></div>
            <div className="landingpage-img-holder">
                <img src={circle_bg} alt="todo-img" className="landingpage_img1 img-fluid"/>
            </div>
            <div className="landing-text-holdeer mt-3">
                <div className="landing-text-heading mb-2"><b>Get Organized Your Life</b></div>
                <div className="landing-text text-justify"><p>Today is a simple and effective to-do list and task manager app which help you manage time.</p></div>
                <div className="get-started-btn shadow-sm mb-2"><Link to="/todotags">Get Started</Link></div>
            </div>
        </div>
       </div>
    )
}
export default LandingPage