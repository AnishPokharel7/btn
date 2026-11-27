"use client";

import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { Lock, CheckCircle2, Heart, User, Mail, CreditCard, AlertCircle } from "lucide-react";

const presetAmounts = [1000, 2500, 5000, 10000, 25000];

export function DonateForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5000);
  const [customAmount, setCustomAmount] = useState<string>("5000");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d]/g, '');
    setCustomAmount(val);
    const numVal = parseInt(val, 10);
    if (!isNaN(numVal) && presetAmounts.includes(numVal)) {
      setSelectedAmount(numVal);
    } else {
      setSelectedAmount(null);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const amount = customAmount ? parseInt(customAmount, 10) : 0;

    if (!amount || amount < 100) {
      newErrors.amount = 'Minimum donation is रु100';
    }

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const displayAmount = customAmount ? parseInt(customAmount, 10) : 0;

  return (
    <section className="w-full section-padding bg-background" aria-labelledby="donate-form-heading">
      <Container size="page">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Frequency Toggle */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Donation Frequency</h3>
              <div className="flex gap-4" role="radiogroup" aria-label="Donation frequency">
                {[
                  { value: 'one-time', label: 'One-Time', desc: 'Single donation', icon: Heart },
                  { value: 'monthly', label: 'Monthly', desc: 'Recurring monthly (Best Impact)', icon: Heart },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFrequency(opt.value as "one-time" | "monthly")}
                    className={`flex-1 p-6 rounded-2xl border-2 transition-all relative ${
                      frequency === opt.value
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'border-border hover:border-primary/50 bg-card'
                    }`}
                    role="radio"
                    aria-checked={frequency === opt.value}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        frequency === opt.value ? 'bg-primary text-primary-foreground' : 'bg-muted text-text-secondary'
                      }`}>
                        <opt.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{opt.label}</p>
                        <p className="text-sm text-text-secondary">{opt.desc}</p>
                      </div>
                    </div>
                    <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      frequency === opt.value ? 'border-primary bg-primary' : 'border-border'
                    }`}>
                      {frequency === opt.value && (
                        <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Preset Donation Amounts */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Select Amount (NPR)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4" role="group" aria-label="Preset donation amounts">
                {presetAmounts.map((amount) => {
                  const isSelected = selectedAmount === amount;
                  return (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handlePresetClick(amount)}
                      className={`p-4 rounded-xl text-center transition-all ${
                        isSelected
                          ? 'bg-primary text-primary-foreground shadow-lg border-2 border-primary'
                          : 'bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                      aria-pressed={isSelected}
                    >
                      <p className="text-sm text-text-secondary">रु</p>
                      <p className="text-2xl font-extrabold">{amount.toLocaleString()}</p>
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount */}
              <div>
                <label htmlFor="custom-amount" className="block text-sm font-medium text-text-secondary mb-2">
                  Or Custom Amount (NPR)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary">रु</span>
                  <input
                    id="custom-amount"
                    type="number"
                    min="100"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder="Enter amount (min. 100)"
                    className="w-full pl-10 pr-4 py-4 bg-card border border-border rounded-xl text-lg font-semibold text-foreground placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    aria-describedby={errors.amount ? 'amount-error' : undefined}
                    aria-invalid={!!errors.amount}
                  />
                </div>
                {errors.amount && (
                  <p id="amount-error" className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    {errors.amount}
                  </p>
                )}
              </div>
            </div>

            {/* Donor Information */}
            <div className="border-t border-border pt-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">Your Information</h3>
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
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
                  <label htmlFor="email-address" className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" aria-hidden="true" />
                    <input
                      id="email-address"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="w-4 h-4" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    defaultChecked
                  />
                  <span className="text-sm text-text-secondary">
                    I want to receive updates about the impact of my donation and the foundation&apos;s work.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t border-border pt-8">
              <Button type="submit" className="w-full py-4 text-lg" disabled={displayAmount < 100}>
                Complete Donation of रु{displayAmount.toLocaleString()}
              </Button>

              {/* Security Footer */}
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-text-secondary">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span>Secure 256-bit SSL encrypted transaction</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span>PCI DSS Compliant</span>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center py-16 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-3">Thank You for Your Generosity!</h3>
            <p className="text-text-secondary text-lg mb-6 max-w-md mx-auto">
              Your {frequency === "monthly" ? "monthly" : "one-time"} donation of <strong className="text-foreground">रु{displayAmount.toLocaleString()}</strong> is helping us create sustainable change across Nepal. A receipt has been sent to <strong className="text-primary">{email}</strong>.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)} className="w-full sm:w-auto">
              Make Another Donation
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}