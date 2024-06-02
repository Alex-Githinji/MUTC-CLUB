import "../leaders/leaders.css"
import { Link } from "react-router-dom"
import Elon  from "../leaders/Elon.jpg"

const Leaders = () => {
    return(
     <section>
      <div className="leaders">
        <div className="overview">
            <h1 class="overview1">These are the current leaders</h1>
             <p class="overview2">Every leader plays a different role in the team</p>
        </div>
      </div>

        <div className="body">
      

            <div class="row">
               <div class = "col">
                    <div class="description">
                        <img class="img" src={Elon} alt="img" />
                        <div className="Name">Martha Njeri
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste eius rem sequi tempore minus tempora, consequatur quaerat blanditiis accusantium sed magnam! Placeat enim, saepe nam voluptate veritatis repudiandae voluptatem?</p>
                       </div>
                    </div>
                    <div class="description">
                        <img class="img" src={Elon} alt="img" />
                        <div className="Name">Martha Njeri
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste eius rem sequi tempore minus tempora, consequatur quaerat blanditiis accusantium sed magnam! Placeat enim, saepe nam voluptate veritatis repudiandae voluptatem?</p>
                       </div>
                    </div>
                    <div class="description">
                        <img class="img" src={Elon} alt="img" />
                        <div className="Name">Martha Njeri
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste eius rem sequi tempore minus tempora, consequatur quaerat blanditiis accusantium sed magnam! Placeat enim, saepe nam voluptate veritatis repudiandae voluptatem?</p>
                       </div>
                    </div>
                    

                </div>
            </div>


 
         </div> 

         <div className="container">
         <div class="description">
                        <img class="img" src={Elon} alt="img" />
                        <div className="Name">Martha Njeri
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste eius rem sequi tempore minus tempora, consequatur quaerat blanditiis accusantium sed magnam! Placeat enim, saepe nam voluptate veritatis repudiandae voluptatem?</p>
                       </div>
                    </div>

         </div>
         
        </section>
    )
}

export default Leaders;