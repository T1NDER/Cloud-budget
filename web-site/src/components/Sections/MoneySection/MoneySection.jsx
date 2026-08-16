import { moneyData } from "@dataSection/MoneySectionData/MoneySectionData";
import "@componentsSection/MoneySection/MoneySection.css";


export default function MoneySection() {
    const { title, description, icons, image } = moneyData;

    return (
        <section className="money-section">
            <div className="money-section__container">
                <div className="money-section__left-part">
                    <h2 className="money-section__title">{title}</h2>
                    {description && <p className="money-section__description">{description}</p>}

                    <div className="money-section__icons">
                    {icons.map((icon, idx) => (
                        <a key={idx} href={icon.url}><img src={icon.src} alt={icon.alt} /></a>
                    ))}
                    </div>
                </div>
                
                <div className="money-section__right-part">
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>
        </section>
    )
};