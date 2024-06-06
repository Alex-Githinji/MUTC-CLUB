import "./tracks.css"
import Track from "./Track";
import cyber1 from "./cyber1.jpg"
import mobile from "./mobile.jpg"
import power from "./power.jpg"
import ui from "./ui.jpg"
import web from "./web.jpg"
import security from "./security.jpg"


const Tracks = () => {
    return(
   <div className="content">
 <div className="track-section">
    <Track image={cyber1} title="Cyber Security"  description="students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks" />
     
 </div>
 <div className="track-section">
    <Track image={ui} title="UI/UX design"  description=" Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. By the end of the track, students will be proficient in using industry-standard design tools and techniques, enabling them to create effective, user-centric designs for websites and mobile applications." />
     
 </div>
 <div className="track-section">
    <Track image={web} title="Web development"  description="Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites." />
     
 </div>
 <div className="track-section">
    <Track image={mobile} title="Mobile apps development"  description="Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, students will develop the skills to create user-friendly and efficient mobile applications. By the end of the track, students will be adept at building, testing, and deploying mobile apps, ready to deliver engaging and high-performance solutions for smartphones and tablets." />
     
 </div>
 <div className="track-section">
    <Track image={security} title="Cloud engineering "  description="Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Through practical projects and hands-on labs, students will gain experience in cloud architecture, virtualization, containerization, and DevOps practices. By the end of the track, students will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions, ensuring high availability and performance for applications and services." />
     
 </div>
 <div className="track-section">
    <Track image={power} title="Power Platform "  description="Students who select the Power Platform track will explore the capabilities of Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Through hands-on projects and interactive workshops, students will gain practical experience in leveraging these tools to enhance business processes and drive data-driven decision-making. By the end of the track, students will be proficient in developing integrated solutions using the Power Platform, enabling them to transform organizational operations and improve efficiency."/>
 </div>

   <section>
      <div class="input-form">
        <legend>Enter your details here</legend>
        <div className="contact-info">
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="name" placeholder="Name"></input>

            <label for="email">Email</label>
            <input type="email" id="email" className="name" placeholder="name@gmail.com"></input>

            <label htmlFor="course">Course</label>
            <input type="text" id="course" className="name" placeholder="Web Development"></input>

            <label htmlFor="studyYear">Year of Study</label>
            <input type="text" id="studyYear" className="name" placeholder="3"></input>

            <div class="divdrop">
                <label for="track">Select your track:</label>
                <select id="track" name="track">
                    <option value="">Select a track to major in</option>
                    <option value="UI/UX design">UI/UX Design</option>
                    <option value="web development">Web Development</option>
                    <option value="cyber security">Cyber Security</option>
                    <option value="power platform">Power Platform</option>
                    <option value="cloud engineering">Cloud Engineering</option>
                    <option value="mobile development">Mobile Development</option>
                </select>
            </div>

            <button type="submit" class="btnSubmit">Submit</button>
        </form>
        </div>
    </div>
    </section>
 
</div> 

 



 
    )
}

export default Tracks;

