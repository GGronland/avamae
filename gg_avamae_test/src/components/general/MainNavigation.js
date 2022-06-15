import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import Button from "./Button.js";
import CompanyLogo from "../../images/CompanyLogo.jpg";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <Link to='/'>
            <button className={classes.logo}>
                <img className={classes.logo_image} src={CompanyLogo} alt="Royalty-free download from logologo.com"/>
            </button>
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about-us">ABOUT US</Link></li> 
          <li><Link to="/contact-us">CONTACT US</Link></li>  
          <li><Button className={classes.navlogin}>Log in</Button></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
