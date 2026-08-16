import { contactsData } from "@dataSection/ContactsSectionData/ContactsSectionData";
import "@componentsSection/ContactsSection/ContactsSection.css";


export default function ContactsSection() {
    const { title, description, form } = contactsData;
    const { fields, button } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Форма успешно отправлена!");
        e.target.reset(); 
    };

    return (
        <section className="contacts-section">
            <div className="contacts-section__container">
                <div className="contacts-section__left-part">
                    <h2 className="contacts-section__title">{title}</h2>
                    {description && (<p className="contacts-section__description">{description}</p>)}
                </div>
                
                <div className="contacts-section__right-part">
                    <form className="contacts-section__form" onSubmit={handleSubmit}>
                        {fields.map((field) => (
                            <input
                                key={field.name}
                                name={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                pattern={field.pattern}
                                required={field.required}
                                className="contacts-section__input"
                            />
                        ))}

                        <button type={button.type} className="contacts-section__btn">
                            {button.label}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}