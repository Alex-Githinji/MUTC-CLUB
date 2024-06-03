import "../leaders/leaders.css"
import { Link } from "react-router-dom"
import Leader from "./Leader"
import Elon from "../leaders/Elon.jpg"

const Leaders = () => {
    return(
     <section>
      <div className="leaders">
        <div className="overview">
            <h1 class="overview1">These are the current leaders</h1>
             <p class="overview2">Every leader plays a different role in the team</p>
        </div>
      </div>
      <div className="container">
        <Leader image={Elon}  Fullname="John Ndia" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>



    
        
         
        </section>
    )
}

export default Leaders;