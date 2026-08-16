import { opportunityData } from "@dataSection/OpportunitySectionData/OpportunitySectionData";
import "@componentsSection/OpportunitySection/OpportunitySection.css";


export default function OpportunityData() {
    const { title, cardContent } = opportunityData;

    return (
        <section className="opportunity-section">
            <div className="opportunity-section__container">
                <div className="opportunity-section__title">{title}</div>

                <div className="opportunity-section__cards">
                    {cardContent.map((card, idx) => (
                        <OpportunityCard key={idx} {...card}/>
                    ))}
                </div>
            </div>
        </section>
    )
}


function OpportunityCard({ icon, iconAlt, title, description, link }) {
    return (
        <div className="opportunity-section__card">
            <img src={icon} alt={iconAlt} />

            <div className="opportunity-section__card-content">
                <h3 className="opportunity-section__card-title">{title}</h3>
                <p className="opportunity-section__card-description">{description}</p>
                <a href={link.url} className="opportunity-section__card-link">{link.label}</a>
            </div>
        </div>
    )
}