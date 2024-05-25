import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Header />
                <div className="row justify-content-around" >
                    <Outlet></Outlet>
                </div>
                <Footer />
            </StrictMode>
        </>
    );
}

export default Basic;