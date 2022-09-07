import AuxOurs from "../assets/images/auxours1.jpeg";
import "../assets/css/Home.css";
const Home = () => {
    return (
        <div className="container border">
            <article className="d-flex py-5 justify-content-evenly">
                <div className="col-6">
                    <img src={AuxOurs} alt="aux ours" className="col-12" />
                    {/* <div id="show_bg" className="col-12">
                        ok
                    </div> */}
                </div>
                <div className="col-4 px-3 border d-flex flex-column justify-content-center">
                    <h2>Bienvenue</h2>
                    <p>Nous sommes ouvert tous les jours de 07h30 à 02H,</p>
                    <p>236 Rue des Pyrénées, 75020 Paris, France.</p>
                </div>
            </article>
        </div>
    );
};

export default Home;
