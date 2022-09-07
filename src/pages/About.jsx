import AuxOursTwo from "../assets/images/auxours2.jpeg";
import "../assets/css/About.css";
const About = () => {
    return (
        <div className="container">
            {/* <h3>Aux Ours</h3>
            <p>
                Nous sommes une brasserie situé à Paris dans le 20ème
                arrondissement,Métro Gambetta. Spécialisé dans la cuisine
                française, vous pourrez déguster chez nous des salades, des
                grillades et des produits de la mer.
            </p> */}
            <article className="d-flex py-5 justify-content-evenly">
                <div className="col-4 px-3 border d-flex flex-column justify-content-center">
                    <h2>Aux Ours</h2>
                    <p>
                        Nous sommes une brasserie situé à Paris dans le 20ème
                        arrondissement, Métro Gambetta.
                    </p>
                    <p>
                        Spécialisés dans la cuisine française, vous pourrez
                        déguster chez nous des salades, des grillades et des
                        produits de la mer.
                    </p>
                    <p>
                        Convivial et chaleureux vous pouvez profiter de boissons
                        rafraîchissantes pour passer du temps entre amis ou bien
                        vous détendre auprès d'une boisson chaude.
                    </p>
                </div>
                <div className="col-6">
                    <img src={AuxOursTwo} alt="aux ours" className="col-12" />
                </div>
            </article>
        </div>
    );
};

export default About;
