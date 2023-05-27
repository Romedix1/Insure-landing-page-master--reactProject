import React from "react";

export default function Description() {
    return (
        <section className="description-section">
            <header>
                <h1 className="description--header">Humanizing your insurance.</h1>
            </header>

            <p className="description--text">Get your life insurance coverage easier and faster. We blend our expertise 
            and technology to help you find the plan that’s right for you. Ensure you 
            and your loved ones are protected.</p>

        <div className="description--button-container">
            <button className="description--button">View plans</button>
        </div>
        <div className="description--top-img-container">
            <img src="./images/bg-pattern-intro-left-desktop.svg" alt='top img' className="description--top-img"/>
        </div>
        <div className="description--bottom-img-container">
            <img src="./images/bg-pattern-intro-right-mobile.svg" alt='bottom img' className="description--bottom-img"/>
            <img src="./images/bg-pattern-intro-right-desktop.svg" alt='bottom img' className="description--desktop-bottom-img"/>
        </div>
        </section>
    )
}