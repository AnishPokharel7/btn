"use client";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Yes, Better Tomorrow Nepal Foundation is registered with the Inland Revenue Department (IRD) for tax exemption. All donations are eligible for tax deduction under Section 11 of the Income Tax Act, 2058. You will receive a formal receipt with our PAN for tax purposes.',
  },
  {
    question: 'How much of my donation goes to programs vs. overhead?',
    answer: 'We are committed to maximizing program impact. On average, 90% of every donation goes directly to program implementation. The remaining 10% covers essential operational costs including monitoring, evaluation, compliance, and minimal administration. Our audited financial statements provide full breakdown.',
  },
  {
    question: 'Can I donate in a currency other than NPR?',
    answer: 'Yes, we accept donations in major currencies (USD, EUR, GBP, INR) through our international payment partners. The amount will be converted at the prevailing exchange rate. For wire transfers in foreign currency, please contact us at finance@bettertomorrownepal.org for bank details.',
  },
  {
    question: 'How do I set up a monthly recurring donation?',
    answer: 'On the donation form, select "Monthly" as the frequency. Your card will be charged automatically on the same date each month. You can modify or cancel your monthly donation at any time by contacting us at donations@bettertomorrownepal.org or through your donor portal.',
  },
  {
    question: 'Will I receive updates on how my donation is used?',
    answer: 'Absolutely. All donors receive quarterly impact updates via email. Monthly donors get access to a personalized donor dashboard with real-time program metrics. Annual impact reports are sent to all donors. You can also opt out of communications at any time.',
  },
  {
    question: 'Can I donate to a specific program or region?',
    answer: 'Yes, you can designate your donation to a specific program (Education, Health, Women Empowerment, etc.) or region. Use the "Add a note" field on the donation form or email us at donations@bettertomorrownepal.org with your preference. Undesignated funds are allocated to where needs are greatest.',
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Yes, we use PCI DSS Level 1 certified payment processors (eSewa, Khalti, Stripe) for all transactions. We never store full card details on our servers. All payment pages use 256-bit SSL encryption. Look for the padlock icon and "https://" in your browser.',
  },
  {
    question: 'Can I donate anonymously?',
    answer: 'Yes, you can choose to donate anonymously on the donation form. Your name will not appear in any public donor lists or reports. However, we still require your contact information for receipt issuance and tax purposes (kept confidential per our privacy policy).',
  },
  {
    question: 'How can I donate via bank transfer?',
    answer: 'For bank transfers, please use the following details:\n\nAccount Name: Better Tomorrow Nepal Foundation\nBank: Standard Chartered Bank Nepal Ltd.\nAccount Number: 01-1234567-01\nSWIFT: SCBLNPKA\n\nPlease email us the transfer reference at finance@bettertomorrownepal.org so we can issue your receipt promptly.',
  },
  {
    question: 'Can I fundraise for BTN Foundation instead of donating directly?',
    answer: 'Absolutely! We love when supporters create their own fundraisers — birthdays, marathons, community events, or creative campaigns. Visit our "Get Involved > Fundraise" page for ideas, tools, and support. We\'ll help you set up a personalized campaign page and promote it.',
  },
];

export function DonateFAQ() {
  return (
    <section className="w-full section-padding bg-muted/30" aria-labelledby="donate-faq-heading">
      <Container size="page">
        <SectionHeading
          id="donate-faq-heading"
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about donating to Better Tomorrow Nepal Foundation."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden"
              open={index === 0}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-foreground pr-10">{faq.question}</h3>
                <div className="absolute right-6 flex items-center">
                  <ChevronDown className="w-5 h-5 text-text-secondary transition-transform duration-200 group-open:rotate-180 group-open:hidden" aria-hidden="true" />
                  <ChevronUp className="w-5 h-5 text-primary transition-transform duration-200 hidden group-open:block" aria-hidden="true" />
                </div>
              </summary>
              <div className="px-6 pb-6 text-text-secondary leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                {faq.answer.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 last:mb-0 whitespace-pre-line">{line}</p>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">Still have questions?</p>
          <a href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            Contact Our Team
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}