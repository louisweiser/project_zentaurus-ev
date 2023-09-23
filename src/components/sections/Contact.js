import { contactData, bankData } from "../../../public/content/contact";

export default function ContactContent() {
  return (
    <section>
      <article>
        <p>{contactData.name}</p>
        <p>{contactData.street}</p>
        <p>{contactData.county}</p>
        <p>{contactData.postal}</p>
        <p>Telefon: {contactData.phone}</p>
        <p>Telefax: {contactData.fax}</p>
        <p>E-Mail: {contactData.mail}</p>
      </article>
      <article>
        <p>{bankData.text}</p>
        <p>Registergericht: {bankData.county}</p>
        <p>Registernummer: {bankData.number}</p>
        <p>Bank: {bankData.name}</p>
        <p>IBAN: {bankData.iban}</p>
        <p>BIC: {bankData.bic}</p>
      </article>
    </section>
  );
}
