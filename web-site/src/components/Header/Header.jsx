import { headerData, heroData } from "@data/HeaderData/HeaderData";
import "@components/Header/Header.css";


export default function Header() {
    const { logo, navigation, loginButton } = headerData;
    const { title, subtitle, tryButton } = heroData;

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top-part">
                    <nav className="header__nav" aria-label="Main navigation">
                        <a href="/" className="header__logo" aria-label="CloudBudget home">
                            <img src={logo.icon} alt={`${logo.text} logo`} aria-hidden="true"/>
                            <span className="header__logo-text">{logo.text}</span>
                        </a>

                        <ul className="header__menu">
                            {navigation.map((item) => (
                                <li key={item.id}>
                                    <a href={item.url} id={item.id}>{item.label}</a>
                                </li>
                            ))}
                        </ul>

                        <a href={loginButton.url} className="header__enter-btn">{loginButton.text}</a>
                    </nav>
                </div>
                
                <div className="header__bottom-part">
                    <h1 className="header__title">{title}</h1>
                    <p className="header__subtitle">{subtitle}</p>
                    <a href={tryButton.url} className="header__try-btn">{tryButton.text}</a>
                </div>
            </div>
        </header>
    );
}