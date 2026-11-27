import { Metadata } from "next";
import { ContactHero } from "./ContactHero";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { ContactMap } from "./ContactMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Better Tomorrow Nepal Foundation. Our team in Itahari, Sunsari is ready to answer your questions about programs, partnerships, volunteering, and donations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-background">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  );
}