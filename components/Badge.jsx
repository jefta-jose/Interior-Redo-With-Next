'use client';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Badge = ({ containerStyles, endCountNum, endCountText }) => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const handleVisibilityChange = (entries) => {
            if (entries[0].isIntersecting) {
                setKey((prev) => prev + 1); // Increment the key to reset CountUp
            }
        };

        const observer = new IntersectionObserver(handleVisibilityChange, {
            threshold: 0.5, // Adjust this threshold as needed
        });

        const element = document.getElementById(`badge-${endCountNum}`);
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [endCountNum]);

    return (
        <div id={`badge-${endCountNum}`} className={`${containerStyles}`}>
            <div className="flex items-center justify-center gap-x-2">
                <div className="text-4xl leading-none font-bold">
                    <CountUp key={key} end={endCountNum} delay={1} duration={4} />
                    {endCountText}
                </div>
            </div>
        </div>
    );
};

export default Badge;
