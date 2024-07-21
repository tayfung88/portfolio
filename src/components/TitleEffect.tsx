import React, { useState, useEffect } from 'react';

const words = ["FullStack", "FrontEnd", "BackEnd"];

const TypingEffect: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (index === words.length) {
            setIndex(0);
        }
        
        if (pause) {
            const pauseTimeout = setTimeout(() => {
                setPause(false);
            }, 2000); 

            return () => clearTimeout(pauseTimeout);
        }

        const timeout = setTimeout(() => {
            if (reverse) {
                if (subIndex === 0) {
                    setReverse(false);
                    setIndex((prev) => (prev + 1) % words.length);
                } else {
                    setSubIndex((prev) => prev - 1);
                }
            } else {
                if (subIndex === words[index].length) {
                    setPause(true); 
                    setReverse(true);
                } else {
                    setSubIndex((prev) => prev + 1);
                }
            }
        }, reverse ? 100 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, reverse, index, pause]);

    useEffect(() => {
        const blinkTimeout = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);

        return () => clearInterval(blinkTimeout);
    }, []);

    return (
        <h1>
            Développeur {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
    );
};

export default TypingEffect;
