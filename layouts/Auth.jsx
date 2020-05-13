import React from "react";
import AuthNavbar from "../components/Navbars/AuthNavbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Auth = (props) => {
    React.useEffect(() => {
        document.documentElement.classList.remove("nav-open");
    });

    return (
        <>
            <AuthNavbar />
            <div className="wrapper wrapper-full-page" style={{
                backgroundImage: "url('/img/background-login.jpeg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }} >
                <div className={"full-page "} >
                    {props.children}
                    {/* <Footer fluid /> */}
                </div>
            </div>
        </>
    );
}

export default Auth;
