import "../home/home.css"
import { Link } from "react-router-dom";

import bedsitter from "../home/bedsitter.jpg"
import home from "../home/home.jpg"
import home1 from "../home/home1.jpg"





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
                        <h4>New technologies</h4>
                        <p>Space engineering becomes
                         more and more advanced</p>
                    </div>
                </div>
            </label>
        </div>
    </div>

       </div>
 </section>
    )
}


export default Home;