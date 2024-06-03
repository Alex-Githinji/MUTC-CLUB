import "../home/home.css"
import { Link } from "react-router-dom";
import mission from "../home/mission.jpg"
import Elon  from "../home/Elon.jpg"
import studio from "../home/studio.jpg"
import passport from "../home/passport.jpg"




const Home = () => {
    return(
    <section>
        <div className="container100">
            <div className="background">
            
                <h1 class="stroke-text"> Welcome to MUT-TEC Club</h1>
                <p>Where innovation meets creativity</p>
                <p>where Technology and excel is the main goal</p>
            </div> 
            <button></button>    
        </div>

        <div>
            <div className="About-us">
                <div className="programs">
                    
                    <span class="stroke-text">About Us</span>
                   
                </div>
             </div>   
        </div>
        
        <div class="wrapper-home">
        <div class="container-home">
            <input type="radio" name="slide" id="c1" checked></input>
            <label for="c1" class="card">
                <div class="row">
                    <div class="icon">1</div>
                    <div class="description">
                        <h4>Mission</h4>
                        <p>To create a good enviroment to students who are intrested in learning</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c2" ></input>
            <label for="c2" class="card">
                <div class="row">
                    <div class="icon">2</div>
                    <div class="description">
                        <h4>Value</h4>
                        <p>Working together to accomplish a goal
                         </p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c3" ></input>
            <label for="c3" class="card">
                <div class="row">
                    <div class="icon">3</div>
                    <div class="description">
                        <h4>Objective</h4>
                        <p>our objective is to make sure that we can offer all servoced need by the students</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c4" ></input>
            <label for="c4" class="card">
                <div class="row">
                    <div class="icon">4</div>
                    <div class="description">
                        <h4>Team work</h4>
                        <p>working together lead to knowledge and power
                         </p>
                    </div>
                </div>
            </label>
        </div>
        </div>



       <div className="Testimonies">
        <div class= "inner">
            <h1 class="test">Testimonials</h1>
            <div class= "border"></div>

            <div class="row">
                <div class = "col">
                    <div class="testimonial">
                        <img class="img" src={studio} alt="img" />
                        <div className="Name">Martha Njeri</div>
                        
                        <p>The mentorship program connected me with industry leaders who offered guidance and opened doors to new opportunities. Additionally, the regular workshops and events helped me stay updated with the latest trends and expanded my professional network. Joining the Mut-club was one of the best decisions</p>

                    </div>
                    <div class="testimonial">
                        <img class="img" src={Elon} alt="img" />
                        <div className="Name">Ian Kimani</div>
                        
                        <p>Being a part of the Mut-club Alumni Association has been a transformative experience. The community is incredibly supportive and has provided numerous opportunities for professional development and personal growth</p>

                    </div>
                    <div class="testimonial">
                        <img class="img" src={passport} alt="img" />
                        <div className="Name">Victor Griffin</div>
                        
                        <p>Joining the Mut-Club was a pivotal moment in my academic journey, but the benefits truly extended beyond graduation thanks to the Alumni Association. The ongoing professional development opportunities, such as exclusive webinars and industry meetups,</p>

                    </div>

                </div>
            </div>


        </div>
        
            
        


       </div>
 </section>
    )
}


export default Home;