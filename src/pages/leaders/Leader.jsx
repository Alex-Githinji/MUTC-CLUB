import { FaTwitter, FaFacebook, FaLinkedin ,  FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Leader = ({image, twitterUrl, fbUrl, igurl ,Fullname, description}) => {
    return(
        <div className="Leader">
        
           <div className="leader-wrapper">
            <img src={image} alt="" />
            {/* <p className="social-media">{twitterUrl}, {fbUrl}, {igurl}</p> */}
            </div>
           <div className="leader-body">

            <h2>{Fullname}</h2>
        
            <p>{description}</p>

           </div>
            
       </div>
    )
}
export default Leader;