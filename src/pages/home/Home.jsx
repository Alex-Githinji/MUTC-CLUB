import "../home/home.css"
import { Link } from "react-router-dom";
import bedsitter from "../home/bedsitter.jpg"
import car from "../home/car.jpg"
import home from "../home/home.jpg"




const Home = () => {
    return(
    <section>
        <div className="container">
            <div className="background">
            
                <h1>Welcome to MUT-TEC where Technology and excel is the main goal</h1>

            </div>     
        </div>

        <div>
            <div className="About-us">
                <div className="programs">
                    <span className="stroke-text">Our Mission</span>
                    <span>Values</span>
                    <span className="stroke-text">Objectives</span>
                </div>


            <div className="About-item">
            <div className="mission">
                <img className ="mission-image" src={bedsitter} alt="this image if more" />

                <h1 className="mission-title">Our mission</h1>
                <p>lorem  3is</p>
            </div>

             
            <div className="values">
                <img className="value-image" src={car} alt="this image if more" />

                <p>lorem  3is</p>
            </div>

             
            <div className="objectives">
                <img className="objective-image" src={home} alt="this image if more" />
                <p>lorem  3is</p>
            </div>
            </div>
            
            </div>
              
        </div>
    </section>
    )
}


export default Home;