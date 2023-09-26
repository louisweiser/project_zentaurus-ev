import SectionTitle from "../SectionTitle.js";
import { contactData } from "../../../public/content/contact";

export default function ContactContent() {
  return (
    <section id="section8">
      <SectionTitle title="Kontakt" />
      <p>{contactData.name}</p>
      <p>{contactData.street}</p>
      <p>{contactData.county}</p>
      <p>{contactData.postal}</p>
      <p>Telefon: {contactData.phone}</p>
      <p>Telefax: {contactData.fax}</p>
      <p>E-Mail: {contactData.mail}</p>
    </section>
  );
}
