import "../home/home.css"
import { Link } from "react-router-dom";
import mission from "../home/mission.jpg"
import Elon  from "../home/Elon.jpg"
import studio from "../home/studio.jpg"
import passport from "../home/passport.jpg"




const Home = () => {
    return(
    <section>
        <div className="container1">
            <div className="background">
            
                <h1>Welcome to MUT-TEC where Technology and excel is the main goal</h1>

            </div>     
        </div>

        <div>
            <div className="About-us">
                <div className="programs">
                    
                    <span className="Stroke-text">About Us</span>
                   
                </div>
             </div>   
            
        <div class="wrapper">
        <div class="container">
            <input type="radio" name="slide" id="c1" checked></input>
            <label for="c1" class="card">
                <div class="row">
                    <div class="icon">1</div>
                    <div class="description">
                        <h4>Mission</h4>
                        <p>The mission of our MUTC-club is to foster a collaborative and inclusive community where students can explore and expand their knowledge of computer science</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c2" ></input>
            <label for="c2" class="card">
                <div class="row">
                    <div class="icon">2</div>
                    <div class="description">
                        <h4>Values</h4>
                        <p>The club offers free training to students with the organisation</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c3" ></input>
            <label for="c3" class="card">
                <div class="row">
                    <div class="icon">3</div>
                    <div class="description">
                        <h4>objective</h4>
                        <p>The main objective to see people persue there dream of becoming proble solvers in the field of Technology</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c4" ></input>
            <label for="c4" class="card">
                <div class="row">
                    <div class="icon">4</div>
                    <div class="description">
                        <h4>Team work</h4>
                        <p>Working together can lead to success</p>
                    </div>
                </div>
            </label>
        </div>
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
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste eius rem sequi tempore minus tempora, consequatur quaerat blanditiis accusantium sed magnam! Placeat enim, saepe nam voluptate veritatis repudiandae voluptatem?</p>

                    </div>
                    <div class="testimonial">
                        <img class="img" src={Elon} alt="img" />
                        <div className="Name">Ian Kimani</div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste eius rem sequi tempore minus tempora, consequatur quaerat blanditiis accusantium sed magnam! Placeat enim, saepe nam voluptate veritatis repudiandae voluptatem?</p>

                    </div>
                    <div class="testimonial">
                        <img class="img" src={passport} alt="img" />
                        <div className="Name">Martha Njeri</div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste eius rem sequi tempore minus tempora, consequatur quaerat blanditiis accusantium sed magnam! Placeat enim, saepe nam voluptate veritatis repudiandae voluptatem?</p>

                    </div>

                </div>
            </div>


        </div>
        
            
        


       </div>
 </section>
    )
}


export default Home;