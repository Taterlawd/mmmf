"use client";

import { useState } from "react";
import Link from "next/link";

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    transactionId: "",
    program: "General Support",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation Tracking Submission:", formData);
    setSubmitted(true);
  };

  return (
    // Added w-full to secure layout width against collapsing parent flex nodes
    <div className="w-full py-16 px-6 max-w-3xl mx-auto">
      <header className="mb-12 text-center w-full">
        <span className="text-xs font-bold uppercase tracking-widest text-foundation-crimson block mb-2">
          Make a Difference
        </span>
        <h1 className="font-serif text-4xl font-bold text-foundation-maroon">
          Support Our Mission
        </h1>
        <p className="text-sm text-text-muted max-w-xl mx-auto mt-3 font-light leading-relaxed">
          “Together, we can break barriers and build communities of dignity, equality, and opportunity.”
        </p>
      </header>

      {/* MPESA INSTRUCTIONS BOX */}
      <section className="w-full bg-white p-6 rounded-lg border border-surface-card shadow-xs max-w-xl mx-auto mb-10 text-center">
        <div className="inline-block bg-[#4FF23F]/10 text-[#1E7316] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          Direct via M-Pesa
        </div>
        <h2 className="font-serif text-xl font-bold text-foundation-maroon mb-2">How to Donate via M-Pesa</h2>
        <p className="text-xs text-text-muted font-light mb-4">
          You can send your contributions directly to the foundation using the details below:
        </p>
        <div className="bg-surface-canvas p-4 rounded border border-surface-card grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-left text-sm max-w-sm mx-auto">
          <span className="font-medium text-text-muted">Paybill / Number:</span>
          <span className="font-mono font-bold text-foundation-maroon text-right sm:text-left">247247</span>
          
          <span className="font-medium text-text-muted">Account Number:</span>
          <span className="font-mono font-bold text-foundation-crimson text-right sm:text-left">0123 4567 8901</span>
          
          <span className="font-medium text-text-muted">Account Name:</span>
          <span className="font-sans font-semibold text-text-body text-right sm:text-left text-xs sm:text-sm truncate">MM MBUYA FOUNDATION</span>
        </div>
      </section>

      {/* TRACKING FORM */}
      <section className="w-full bg-white p-8 rounded-lg border border-surface-card shadow-sm max-w-xl mx-auto">
        <h3 className="font-serif text-lg font-bold text-foundation-maroon mb-2 text-center">
          Donation Notification Form
        </h3>
        <p className="text-xs text-text-muted text-center font-light mb-6">
          After completing your M-Pesa transaction, please fill out this form to help our tracking operations manually match your contribution back to its intended project.
        </p>

        {submitted ? (
          <div className="bg-surface-canvas p-6 rounded border border-foundation-cream text-center">
            <h4 className="font-serif text-lg font-bold text-foundation-maroon mb-2">Thank You for Your Support!</h4>
            <p className="text-xs text-text-muted font-light mb-4">
              We have received your transaction receipt log. Our administration team will match and allocate your funds shortly.
            </p>
            <button 
              onClick={() => { setSubmitted(false); setFormData({ name: "", amount: "", transactionId: "", program: "General Support" }); }}
              className="text-xs font-bold text-foundation-crimson hover:underline cursor-pointer"
            >
              Submit another transaction notification
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-1.5">
                Your Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-sm p-3 bg-surface-canvas border border-surface-card rounded focus:outline-none focus:border-foundation-tan font-light"
              />
            </div>

            {/* Program Dropdown Selection */}
            <div>
              <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-1.5">
                Designated Initiative / Project
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full text-sm p-3 bg-surface-canvas border border-surface-card rounded focus:outline-none focus:border-foundation-tan text-text-body font-light"
              >
                <option value="General Support">General Support (Where it is needed most)</option>
                <option value="Education Sponsorship">Education Sponsorship Program</option>
                <option value="Family & Community Empowerment">Family & Caregiver Empowerment Program</option>
                <option value="Hygiene & Dignity Support">Hygiene & Dignity Support Program</option>
                <option value="Nutrition Support">Nutrition Support Program</option>
              </select>
            </div>

            {/* Amount and Transaction Row - Fixed with explicit mobile columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-1.5">
                  Amount Contributed (KES)
                </label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 2500"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full text-sm p-3 bg-surface-canvas border border-surface-card rounded focus:outline-none focus:border-foundation-tan font-light"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-1.5">
                  M-Pesa Transaction ID
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. RQA73K9SL0"
                  value={formData.transactionId}
                  onChange={(e) => setFormData({ ...formData, transactionId: e.target.value.toUpperCase() })}
                  className="w-full text-sm p-3 bg-surface-canvas border border-surface-card rounded focus:outline-none focus:border-foundation-tan font-mono uppercase tracking-wider"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-foundation-crimson text-white py-3 rounded font-semibold text-sm hover:bg-foundation-maroon transition-colors shadow-xs mt-4 cursor-pointer"
            >
              Verify & Send Log
            </button>
          </form>
        )}
      </section>
    </div>
  );
}