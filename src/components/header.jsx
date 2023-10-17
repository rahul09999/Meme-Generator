import React from "react";
import troll_face from "../assets/troll_face.png";

export default function Header() {
    return (
    <header className="header">
        <img 
        src={troll_face}
        className="header--image" />
        <h2 className="header--title">Meme Generator</h2>
        <h3 className="header--project">React Course - Project 2</h3>
    </header>
    );
    }