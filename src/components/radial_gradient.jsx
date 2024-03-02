"use client"
import React, { useEffect, useState } from "react";


const DynamicBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
            const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100);
            setMousePosition({ x: mouseXpercentage, y: mouseYpercentage });
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const gradientStyle = {
        background: `radial-gradient(at ${mousePosition.x}% ${mousePosition.y}%,#2B4162, #12100E)`,
        position: 'absolute', // Zmiana z 'fixed' na 'absolute'
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    };

    return (
        <div style={gradientStyle} className="DynamicBackground"></div>
    );
}

export default DynamicBackground;