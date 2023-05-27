import React from "react";
import AdvantagesData from "./AdvantagesData"
import AdvantagesCard from "./AdvantagesCard"

export default function Advantages() {
    const AdvantagesCards = AdvantagesData.map(item => {
        return (
            <AdvantagesCard 
                key={item.id}
                {...item}
            />
        )
    })
    console.log(AdvantagesCards)

    return (
        <section className="advantages-section">
            <header>
                <h1 className="advantages--header">We're different</h1>
            </header>

            <main>
                {AdvantagesCards}
                
            </main>
        </section>
    )
}