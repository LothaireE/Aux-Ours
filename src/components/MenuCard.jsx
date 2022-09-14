import MenuData from "../data/MenuData";
import PlateCard from "./PlateCard";
const MenuCard = () => {
    let { starters, salads, plates, planches } = MenuData;

    return (
        <article className="container border d-flex flex-column col-11 mb-5">
            <div>
                <h4 className="text-decoration-underline font-weight-bold my-4 ps-2">
                    Entrées
                </h4>
                {starters.map((item, index) => {
                    return <PlateCard key={index} item={item} />;
                })}
            </div>
            <div>
                <h4 className="text-decoration-underline my-4 ps-2">Salades</h4>
                {salads.map((item, index) => {
                    return <PlateCard key={index} item={item} />;
                })}
            </div>
            <div>
                <h4 className="text-decoration-underline my-4 ps-2">Plats</h4>
                {plates.map((item, index) => {
                    return <PlateCard key={index} item={item} />;
                })}
            </div>
            <div>
                <h4 className="text-decoration-underline my-4 ps-2">
                    Planches
                </h4>
                {planches.map((item, index) => {
                    return <PlateCard key={index} item={item} />;
                })}
            </div>
        </article>
    );
};

export default MenuCard;
