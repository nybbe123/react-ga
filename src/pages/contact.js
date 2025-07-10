import React, { useEffect } from "react";
import ReactGA from 'react-ga4';


function Contact() {

                const handleButtonClick = () => {
        ReactGA.event({
          category: 'User',
          action: `Contactpage clicked`
        });
      };

              useEffect(() => {
        ReactGA.initialize('G-3K6BQPTBXC');
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }, []);


    return (
        <>
        <h2>Contact Page</h2>
        <button onClick={handleButtonClick}>Click me!</button>
        </>
    );
}

export default Contact;