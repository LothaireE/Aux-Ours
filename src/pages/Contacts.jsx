import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import "../assets/css/Contacts.css";
import { BrandInstagram } from "tabler-icons-react";
import { Link } from "react-router-dom";
const Contacts = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        console.log("ok");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, "2000");
    };
    useEffect(() => {
        console.log(copied);
    }, [copied]);
    // text-center
    return (
        <div className="container">
            <section className="d-flex border justify-content-center">
                <article className="border flex-column text-center col-8 mt-5 py-5">
                    {copied ? (
                        <div>copié !</div>
                    ) : (
                        <div>cliquez pour copier le numéro</div>
                    )}
                    <p className="mb-4">
                        <span>Tel : </span>
                        {/* Tel : */}
                        <CopyToClipboard
                            text={"0183964079"}
                            onCopy={() => handleCopy()}
                            // onClick={() => handleCopy()}
                        >
                            <span className="phone">01 83 96 40 79</span>
                        </CopyToClipboard>
                    </p>

                    {/* {copied && <div>copié !</div>} */}
                    {/* "https://www.instagram.com/explore/locations/1390002/aux-ours/"
                        
                        target="_blank"
                        className="instagram" */}
                    <a
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/explore/locations/1390002/aux-ours/"
                        target="_blank"
                        className="instagram mb-4"
                    >
                        <BrandInstagram
                            size={42}
                            strokeWidth={1}
                            color={"black"}
                        />
                        <span> : @aux-ours</span>
                    </a>
                    <p className="mt-4">
                        Adresse : 236 Rue des Pyrénées, 75020 Paris.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Contacts;
