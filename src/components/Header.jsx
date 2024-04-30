import React from "react"
import img from "../assets/images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={img} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">A React Project</h4>
        </header>
    )
}