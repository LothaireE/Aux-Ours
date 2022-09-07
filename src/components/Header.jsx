import Ours from "../assets/images/ours.png";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="d-flex col-12 align-items-center">
                    <div className="border col-2">
                        <img className="ours" src={Ours} alt="ours logo" />
                    </div>
                    <h1 className="col-4 ps-4">Aux Ours</h1>
                    <nav className="d-flex col-6 border justify-content-around align-items-center">
                        <Link to={"/"}>bienvenue</Link>
                        <Link to={"/About"}>à propos de nous</Link>
                        <Link to={"Contacts"}>contacts</Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
