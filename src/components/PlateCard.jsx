import "../assets/css/PlateCard.css";

const PlateCard = ({ item }) => {
    let { title, details, price } = item;
    return (
        // <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-between align-item-center col-11 mx-auto mb-4">
            <div className="col-8">
                <h5 className="font-weight-bold">{title}</h5>
                <p className="details ps-4">{details}</p>
            </div>
            <div>
                <p>{price} €</p>
            </div>
        </div>
    );
};

export default PlateCard;
