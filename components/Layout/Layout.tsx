import React from "react";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

type props = {
    children?: React.ReactNode
}

const Layout = ({children}:props) => {
    return (
        <div className="container">
            <Navbar/>
                {children}
            <Footer/>
        </div>
    );
};

export default Layout;