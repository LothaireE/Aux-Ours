import Ours from "../assets/images/ours.png";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header border-bottom py-1">
            <div className="container">
                <div className="d-flex col-12 justify-content-between">
                    <Link
                        to={"/"}
                        className="col-4 d-flex justify-content-between align-items-center"
                    >
                        <div className="col-5">
                            <img className="ours" src={Ours} alt="ours logo" />
                        </div>

                        <h1 className="col-6 ps-4  text-md-start">Aux Ours</h1>
                    </Link>
                    <nav className="navBar d-flex col-6 justify-content-around align-items-center">
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
