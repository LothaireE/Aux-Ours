import AuxOurs from "../assets/images/auxours1.jpeg";
import "../assets/css/Home.css";
import MenuCard from "../components/MenuCard";
import { useState } from "react";
import { TriangleInverted, Triangle } from "tabler-icons-react";
const Home = () => {
    // const [showMenu, setShowMenu] = useState(false);
    // mon states test toggle menu fade effect
    const [show, setShow] = useState(false);
    const [mount, setMount] = useState(false);
    const handleToggleMenu = () => {
        if (!show) {
            console.log("cas 1");
            setMount(!mount);
            setTimeout(() => {
                setShow(!show);
            }, "50");
        } else {
            console.log("cas 2");
            setShow(!show);
            setTimeout(() => {
                setMount(!mount);
            }, "450");
        }
    };

    return (
        <div className="container border">
            <article className="d-flex py-5 justify-content-evenly">
                <div className="col-6">
                    <img src={AuxOurs} alt="aux ours" className="col-12" />
                </div>
                <div className="homeBanner col-4 px-3 d-flex flex-column justify-content-around">
                    <div className="topBanner d-flex py-3  flex-column justify-content-around">
                        <h2>Bienvenue</h2>
                        <p>Nous sommes ouvert tous les jours de 07h30 à 02H,</p>
                        <p>236 Rue des Pyrénées, 75020 Paris, France.</p>
                    </div>
                    <div className="downBanner d-flex py-2 justify-content-center align-items-center">
                        <button className="reservationBtn px-5 btn btn-lg">
                            reserver
                        </button>
                    </div>
                </div>
            </article>
            <article className="border">
                <button
                    className="menuBtn"
                    onClick={() => {
                        handleToggleMenu();
                    }}
                >
                    Menu
                    {show ? (
                        <Triangle className="triangle" />
                    ) : (
                        <TriangleInverted className="triangle" />
                    )}
                </button>
                {mount && (
                    <div
                        style={{
                            opacity: !show ? "0" : "1",
                            transition: "all .4s",
                            visibility: !show ? "hidden" : "visible",
                        }}
                    >
                        <MenuCard />
                    </div>
                )}
            </article>
            <article>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi soluta, sint praesentium nemo consequuntur ratione
                    tempore mollitia eum id laudantium vel fugiat! Molestias,
                    unde commodi. Saepe necessitatibus accusamus magnam ab!
                </p>
            </article>
        </div>
    );
};

export default Home;
