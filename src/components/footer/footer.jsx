import { Link } from "react-router-dom";

function Footer() {
   return <>
      <footer className="footer"> <span className="footer__text">
         from
         <Link className="footer__link" to={"https://binary-studio.com"}>
            binary studio
         </Link>
         with
         <img className="footer__icon" src="./assets/images/heart.svg" alt="heart icon" />
      </span>
      </footer>
   </>
}

export default Footer;