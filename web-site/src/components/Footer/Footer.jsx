import { footerData } from "@data/FooterData/FooterData";
import "@components/Footer/Footer.css";

export default function Footer() {
    const { companyName, address, copyright } = footerData;

    return (
        <footer className="footer">
            <div className="footer__container">
                <strong className="footer__title">{companyName}</strong>

                <address className="footer__address">
                    <p>{address.company}</p>
                    <p>{address.street}</p>
                    <p>{address.city}, {address.country}</p>
                </address>

                <p className="footer__copyright">
                    Copyright {copyright.year} {copyright.text}
                </p>
            </div>
        </footer>
    );
}