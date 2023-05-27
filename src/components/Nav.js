import React , { useState }  from "react";

export default function Nav() {

    const [navStatus, setnavStatus] = useState(true);

    function ClosedNav() {
        return (
            <>
            <header className="nav--top-content">
                    <img src='images/logo.svg' alt="main logo" className="nav--logo" />
                    <img src='images/icon-hamburger.svg' onClick={()=>setnavStatus(false)} alt="hamburger icon" className="nav--hamburger-icon"/>

                    <ul className="nav--desktop-list">
                        <li>How we work</li>
                        <li>Blog</li>
                        <li>Account</li>
                    </ul>
                <button className="nav--desktop-button">View plans</button>
            </header>
            </>
        )
    }

    function OpenedNav() {
        return (
            <>
            <header className="nav--top-content opened-nav">
                    <img src='images/logo.svg' alt="main logo" className="nav--logo" />
                    <img src='images/icon-close.svg' onClick={()=>setnavStatus(true)} alt="close icon" className="nav--close-icon"/>

                    <ul className="nav--desktop-list">
                        <li>How we work</li>
                        <li>Blog</li>
                        <li>Account</li>
                    </ul>
                <button className="nav--desktop-button">View plans</button>
            </header>

           <section className="nav--opened">
                <ul className="nav--mobile-list">
                    <li>How we work</li>
                    <li>Blog</li>
                    <li>Account</li>
                </ul>
                <button className="nav--button">View plans</button>
           </section>
           </>
        )
    }

    return (
        <nav>
            

            {navStatus ? <ClosedNav /> : <OpenedNav />}

          
        </nav>
    )
}