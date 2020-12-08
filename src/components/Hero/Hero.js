import './Hero.css'
import React, { useState } from 'react'

function Hero() {
    const [descriptors, setDescriptors] = useState(["Front-End Developer", "App Developer", "Problem Solver", "Web Developer", "Game Developer"]);
    const [counter, setCounter] = useState(0)

    React.useEffect(() => {
        const timer =
            setInterval(() => setCounter(counter + 1), 3000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="Hero" id="pagetop">
            <div className="headerImage" id="pageTop">
                <div className="headerTitle">
                    <h1>Jonathan Warner:</h1>
                    <h2 id="iamList">{descriptors[/*counter % descriptors.length*/0]}</h2>
                </div>
            </div>
        </div>
    );
}

export default Hero