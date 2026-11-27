"use client";

import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Send, CheckCircle2, AlertCircle, User, Mail, Phone, MessageSquare, Tag, PenTool } from "lucide-react";

const inquiryTypes = [
  'General Inquiry',
  'Volunteering & Drives',
  'Blood Donation Program',
  'Donations & Sponsorships',
  'Project Collaboration',
  'Media & Press',
  'Career Opportunities',
  'Other',
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    inquiryType: 'General Inquiry',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.emailAddress.trim()) newErrors.emailAddress = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) newErrors.emailAddress = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      inquiryType: 'General Inquiry',
      subject: '',
      message: '',
    });
  };

  if (submitted) {
    return (
      <section className="w-full section-padding bg-muted/30" aria-labelledby="contact-form-heading">
        <Container size="page">
          <div className="max-w-2xl mx-auto text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 id="contact-form-heading" className="text-3xl font-bold text-foreground mb-3">Message Sent Successfully!</h2>
            <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
              Thank you for contacting <strong className="text-foreground">Better Tomorrow Nepal Foundation</strong>. Our team will review your inquiry and reach out within 24 hours.
            </p>
            <Button variant="outline" onClick={() => setSubmitted(false)} className="w-full sm:w-auto">
              Send Another Message
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="w-full section-padding bg-background" aria-labelledby="contact-form-heading">
      <Container size="page">
        <SectionHeading
          id="contact-form-heading"
          label="SEND A MESSAGE"
          title="We're Here to Help"
          description="Fill in your details below and our team will get back to you within 24 hours."
        />

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6" noValidate>
          {/* Row 1: Full Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-text-secondary mb-2">
                Full Name <span className="text-destructive" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" aria-hidden="true" />
                <input
                  id="full-name"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'name-error' : undefined}
                />
              </div>
              {errors.fullName && (
                <p id="name-error" className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone-number" className="block text-sm font-medium text-text-secondary mb-2">
                Phone Number <span className="text-destructive" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" aria-hidden="true" />
                <input
                  id="phone-number"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+977 98..."
                  className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  aria-invalid={!!errors.phoneNumber}
                  aria-describedby={errors.phoneNumber ? 'phone-error' : undefined}
                />
              </div>
              {errors.phoneNumber && (
                <p id="phone-error" className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email & Inquiry Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-text-secondary mb-2">
                Email Address <span className="text-destructive" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" aria-hidden="true" />
                <input
                  id="email-address"
                  type="email"
                  required
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  aria-invalid={!!errors.emailAddress}
                  aria-describedby={errors.emailAddress ? 'email-error' : undefined}
                />
              </div>
              {errors.emailAddress && (
                <p id="email-error" className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  {errors.emailAddress}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="inquiry-type" className="block text-sm font-medium text-text-secondary mb-2">
                Inquiry Type <span className="text-destructive" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" aria-hidden="true" />
                <select
                  id="inquiry-type"
                  required
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
              Subject <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" aria-hidden="true" />
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="What is this regarding?"
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
            </div>
            {errors.subject && (
              <p id="subject-error" className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                <AlertCircle className="w-4 h-4" aria-hidden="true" />
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
              Your Message <span className="text-destructive" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <PenTool className="absolute top-4 left-4 w-5 h-5 text-text-secondary" aria-hidden="true" />
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message or inquiry here..."
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
            </div>
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                <AlertCircle className="w-4 h-4" aria-hidden="true" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full py-4 text-lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5" aria-hidden="true" />
              </>
            )}
          </Button>

          <p className="text-center text-sm text-text-secondary">
            By submitting this form, you agree to our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a> and <a href="/terms" className="underline hover:text-primary">Terms of Service</a>.
          </p>
        </form>
      </Container>
    </section>
  );
}