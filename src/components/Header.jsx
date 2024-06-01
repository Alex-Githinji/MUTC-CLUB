import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h1 className="Logo">MUT.TEC</h1>
            <div className="navbar">
                <li className="navbar-item">
                    <Link to="/">home</Link>
                </li>
                <li className="navbar-item"> 
                 <Link to="/leaders">leaders</Link>
                </li>
                <li className="navbar-item">
                 <Link to="/courses"> courses</Link>
                </li>

                <li className="navbar-item">
                    <Link to="/Events">Events </Link>
                    </li>

                    
          
            </div>
    
        </div>
    )
}
 export default Header;