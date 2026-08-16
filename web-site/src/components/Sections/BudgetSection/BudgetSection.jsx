import { budgetSectionData } from "@dataSection/BudgetSectionData/BudgetSectionData";
import "@componentsSection/BudgetSection/BudgetSection.css";


export default function BudgetSection() {
    const { title, description, link, image } = budgetSectionData;

    return (
        <section className="budget-section">
            <div className="budget-section__container">
                <div className="budget-section__left-part">
                    <h2 className="budget-section__title">{title}</h2>
                    <p className="budget-section__description">{description}</p>
                    <a href={link.url} className="budget-section__link" aria-label="Узнать подробнее о приложении">{link.label}</a>
                </div>
                
                <div className="budget-section__right-part">
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>
        </section>
    );
}