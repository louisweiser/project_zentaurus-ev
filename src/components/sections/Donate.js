import SectionTitle from "../SectionTitle.js";
import Article from "../Article";
import { bankData } from "../../../public/content/contact";

export default function DonateContent() {
  return (
    <section id="section7">
      <SectionTitle title="Spenden" />
      <Article text={bankData.text} colored={true} />
      <p>Registergericht: {bankData.county}</p>
      <p>Registernummer: {bankData.number}</p>
      <p>Bank: {bankData.name}</p>
      <p>IBAN: {bankData.iban}</p>
      <p>BIC: {bankData.bic}</p>
    </section>
  );
}
