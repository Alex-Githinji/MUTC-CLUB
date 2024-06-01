import { FaTwitter, FaFacebook, FaLinkedin ,  FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Leaders = ({image, twitterUrl, fbUrl, igurl ,Fullname,field}) => {
    return(
        <div className="Leaders">
            <div className="leader-name">
                <img src={be} alt={`An image of  Dr. ${Fullname}`} />
                <div className="social-media"></div>
                {twitterUrl && <Link to ={twitterUrl}><fatwitter/></Link>}
                {fbUrl && <Link to ={fbUrl}><FaFacebook/></Link>}
                {f && <Link to ={fbUrl}><FaFacebook/></Link>}
                {igurl && <Link to ={igUrl}><FaInstagram/></Link>}

            </div>
            <div className="Leader-body">
                <h3>{Fullname}</h3>
                <P className="leader-body_field">{field}</P>
                <p className="leader-body_biography">{biography}</p>
            </div>
            
        </div>
    )
}
export default Leaders;