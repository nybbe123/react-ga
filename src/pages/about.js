import { useEffect } from "react";
import ReactGA from 'react-ga4';


export default function About() {
          useEffect(() => {
        ReactGA.initialize('G-3K6BQPTBXC');
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }, []);

    return <h2>About Page</h2>;
}

