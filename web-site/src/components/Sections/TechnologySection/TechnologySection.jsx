import { technologiesData } from "@dataSection/TechnologySectionData/TechnologySectionData";
import "@componentsSection/TechnologySection/TechnologySection.css";


export default function TechnologySection() {
    const { title, chapters } = technologiesData;

    return (
        <section className="technology-section">
            <div className="technology-section__container">
                <div className="technology-section__title">{title}</div>

                <div className="technology-section__cards">
                    {chapters.map((chapter) => (
                        <TechnologyChapter key={chapter.number} {...chapter}/>
                    ))}
                </div>
            </div>
        </section>
    );
}


function TechnologyChapter({ number, icon, title, description }) {
    return (
        <div className="technology-section__chapter">
            <span className="technology-section__chapter-number">{number}</span>

            <div className="technology-section__chapter-content">
                <img src={icon} alt={`Иконка ${title}`} aria-hidden="true"/>
                <h3 className="technology-section__chapter-title">{title}</h3>
                <p className="technology-section__chapter-description">{description}</p>
            </div>
        </div>
    )
}