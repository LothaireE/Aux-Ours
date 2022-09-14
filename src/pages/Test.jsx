import { useState, useEffect } from "react";

const Test = () => {
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
    useEffect(() => {
        console.log("show", show);
    }, [show]);
    // style={{
    //     opacity: copied ? "0" : "1",
    //     transition: "all .4s",
    //     visibility: copied ? "hidden" : "visible",
    // }}
    return (
        <div className="container">
            <h2>test</h2>
            <button
                onClick={() => {
                    handleToggleMenu();
                }}
            >
                toggle
            </button>
            {mount && (
                <div>
                    <p
                        style={{
                            opacity: !show ? "0" : "1",
                            transition: "all .4s",
                            visibility: !show ? "hidden" : "visible",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Doloremque sapiente ad ratione aliquid eos, a
                        corrupti molestiae cupiditate, neque hic totam quae rem
                        qui voluptatem accusamus. Inventore excepturi laboriosam
                        enim?
                    </p>
                </div>
            )}
        </div>
    );
};

export default Test;
