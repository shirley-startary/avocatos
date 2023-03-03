import React from "react";
import Navbar from "@components/Navbar/Navbar";

type props = {
    children?: React.ReactNode
}

const Layout = ({children}:props) => {
    return (
        <div className="container">
            <Navbar/>
                {children}
            <footer>This is the footer</footer>
        </div>
    );
};

export default Layout;