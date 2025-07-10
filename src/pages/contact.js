import React, { useEffect } from "react";
import ReactGA from 'react-ga4';


function Contact() {

              useEffect(() => {
        ReactGA.initialize('G-3K6BQPTBXC');
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }, []);


    return <h2>Contact Page</h2>;
}

export default Contact;