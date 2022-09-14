import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import "../assets/css/Contacts.css";
import { BrandInstagram, Copy } from "tabler-icons-react";
const Contacts = () => {
    const [copied, setCopied] = useState(true);

    const handleCopy = () => {
        console.log("ok");
        setCopied(false);
        setTimeout(() => {
            setCopied(true);
        }, "1250");
    };

    useEffect(() => {
        console.log(copied);
    }, [copied]);

    return (
        <div className="container">
            <section className="d-flex  justify-content-center">
                <article className="contactInfos text-center col-6">
                    <div className="">
                        <p className="mb-0">
                            <span>Téléphone : </span>
                            <CopyToClipboard
                                text={"0183964079"}
                                onCopy={() => handleCopy()}
                            >
                                <span className="phone">01 83 96 40 79</span>
                            </CopyToClipboard>
                        </p>
                        <p
                            className="mb-0"
                            style={{
                                opacity: copied ? "0" : "1",
                                transition: "all .4s",
                                visibility: copied ? "hidden" : "visible",
                            }}
                        >
                            copié !
                        </p>
                    </div>
                    <div className="">
                        <a
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/explore/locations/1390002/aux-ours/"
                            target="_blank"
                            className="instagram "
                        >
                            <BrandInstagram
                                size={42}
                                strokeWidth={1}
                                color={"black"}
                            />
                            <span> : @aux-ours</span>
                        </a>
                    </div>
                    <div className="">
                        <p className="mb-0">
                            Adresse : 236 Rue des Pyrénées, 75020 Paris.
                        </p>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Contacts;
