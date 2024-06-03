import "../leaders/leaders.css"
import { Link } from "react-router-dom"
import Leader from "./Leader"
import Elon from "../leaders/Elon.jpg"
import web from "../leaders/web.jpg"
import ruth from "../leaders/ruth.jpg"
import stano from "../leaders/stano.jpg"
import manase from "../leaders/manase.jpg"
import caro from "../leaders/caro.jpg"
import Allan from "../leaders/Allan.jpg"
import paul from "../leaders/paul.jpg"
import yvonne from "../leaders/yvonne.jpg"
import bridgo from "../leaders/bridgo.jpg"
import victory from "../leaders/victory.jpg"
import { FaTwitter, FaFacebook, FaLinkedin ,  FaInstagram } from "react-icons/fa";


const Leaders = () => {
    return(
     <section className="leader-section">
      <div className="leaders">
        <div className="overview">
            <h1 class="overview1">These are the current leaders</h1>
             <p class="overview2">Every leader plays a different role in the team</p>
        </div>
      </div>
      <div className="container">
        <Leader image={Elon}  Fullname="John Ndia" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={victory}  Fullname="Victory Njeri" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={Allan}  Fullname="Allan Muhari" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={bridgo}  Fullname="Bridget Gitonga" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={ruth}  Fullname="Ruth Mutisya" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={web}  Fullname="Webster Ifedha" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={manase}  Fullname="Manase Gunga" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={caro}  Fullname="Carolyne Githenduka" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={stano}  Fullname="Stanley Amunze" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={paul}  Fullname="Paul Karanja" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>
      <div className="container">
        <Leader image={yvonne}  Fullname="Yvone Mbithe" description="They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites."/>


      </div>



    
        
         
        </section>
    )
}

export default Leaders;