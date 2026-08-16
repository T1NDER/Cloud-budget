import BudgetSection from "@componentsSection/BudgetSection/BudgetSection";
import OpportunitySection from "@componentsSection/OpportunitySection/OpportunitySection";
import TechnologySection from "@componentsSection/TechnologySection/TechnologySection";
import MoneySection from "@componentsSection/MoneySection/MoneySection";
import ContactsSection from "@componentsSection/ContactsSection/ContactsSection";


export default function Main() {
    return (
        <main className="main">
            <BudgetSection/>
            <OpportunitySection />
            <TechnologySection />
            <MoneySection />
            <ContactsSection />
        </main>
    )
}

