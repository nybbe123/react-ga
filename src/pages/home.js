import React, { useEffect } from "react";
import ReactGA from 'react-ga4';

function Home() {

        const handleButtonClick = () => {
        ReactGA.event({
          category: 'User',
          action: `Homepage clicked`
        });
      };

                  useEffect(() => {
        ReactGA.initialize('G-3K6BQPTBXC');
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }, []);

    return (
        <>
        <h2>Home Page</h2>
        <button onClick={handleButtonClick}>Click me!</button>
        </>
    );
}

export default Home
