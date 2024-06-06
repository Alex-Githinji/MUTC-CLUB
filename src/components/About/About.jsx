import "../About/About.css";
import { Link } from "react-router-dom";

// import bedsitter from "../About/bedsitter.jpg"
// import Home from "./components/About/home.jpg"
// import home1 from "../About/home1.jpg"

const About = () => {
  return (
    <div class="wrapper">
      <div class="container">
        <input type="radio" name="slide" id="c1" checked></input>
        <label for="c1" class="card">
          <div class="row">
            <div class="icon">1</div>
            <div class="description">
              <h4>Winter</h4>
              <p>Winter has so much to offer - creative activities</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2"></input>
        <label for="c2" class="card">
          <div class="row">
            <div class="icon">2</div>
            <div class="description">
              <h4>Digital Technology</h4>
              <p>Gets better every day - stay tuned</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3"></input>
        <label for="c3" class="card">
          <div class="row">
            <div class="icon">3</div>
            <div class="description">
              <h4>Globalization</h4>
              <p>Help people all over the world</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4"></input>
        <label for="c4" class="card">
          <div class="row">
            <div class="icon">4</div>
            <div class="description">
              <h4>New technologies</h4>
              <p>Space engineering becomes more and more advanced</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default About;
