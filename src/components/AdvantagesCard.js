import React from "react";

export default function AdvantagesCard(props) {
    return (
        <article className="advantages--card-container">
                <img src={`./images/${props.image}`} alt="card image" className="advantages--card-image" />

            <header>
                <h2 className="advantages--card-header">{props.headerText}</h2>
            </header>

            <p className="advantages--card-main-text">{props.mainText}</p>
        </article>
    )
}