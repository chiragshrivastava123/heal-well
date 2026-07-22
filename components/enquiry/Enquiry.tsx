"use client";

import { useState } from "react";
import Footer from "@/components/footer/Footer";

/* ---------- TYPES ---------- */

type FormState = {
  name: string;
  phone: string;
  email: string;
  dob: string;
  preferred_time: string;
  consultation_medium: string;
  message: string;
};

type TouchedState = Record<string, boolean>;

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onBlur?: (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  error?: string | false;
};

type ContactProps = {
  title: string;
  value: string;
  href: string;
  blank?: boolean;
};

export default function Enquiry() {
  const [status, setStatus] = useState<string>("");
  const [touched, setTouched] = useState<TouchedState>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    dob: "",
    preferred_time: "",
    consultation_medium: "",
    message: "",
  });

  /* ---------- VALIDATION ---------- */
  const errors = {
    name: !form.name
      ? "Name is required"
      : !/^[A-Za-z\s]+$/.test(form.name)
      ? "Only letters allowed"
      : "",

    phone: !form.phone
      ? "Phone number is required"
      : !/^\d{10,15}$/.test(form.phone)
      ? "Enter 10–15 digits only"
      : "",

    email: !form.email
      ? "Email is required"
      : !/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(form.email)
      ? "Enter a valid email"
      : "",

    consultation_medium: !form.consultation_medium
      ? "Please select consultation medium"
      : "",

    message: !form.message ? "Health concern is required" : "",
  };

  const isFormValid = Object.values(errors).every((e) => e === "");

  /* ---------- HANDLERS ---------- */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus("Submitting...");

    try {
      const body = new URLSearchParams();
      Object.entries(form).forEach(([key, value]) => {
        body.append(key, value);
      });

      const res = await fetch("/api/enquiry", {
        method: "POST",
        body,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Enquiry submitted successfully");
        setForm({
          name: "",
          phone: "",
          email: "",
          dob: "",
          preferred_time: "",
          consultation_medium: "",
          message: "",
        });
        setTouched({});
      } else {
        setStatus("❌ Failed to submit");
      }
    } catch {
      setStatus("❌ Please try again.");
    }
  };

  return (
    <>
      <main className="bg-[#f6f9f5] min-h-screen px-6 py-26 pt-32">
        {/* HERO */}
        <section className="max-w-5xl mx-auto text-center mb-15">
          <h1 className="text-4xl font-semibold text-green-800">
            Help Me Help You
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            You are unique, and your health plan should be too. Please share the
            details below so I can better understand your needs.
          </p>
        </section>

        {/* MAIN GRID */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* LEFT – FORM */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg ring-1 ring-[#8FAF9A]/20 p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  label="Full Name *"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && errors.name}
                />

                <Field
                  label="Phone Number *"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && errors.phone}
                />

                <Field
                  label="Email *"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                />

                <Field
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={form.dob}
                  onChange={handleChange}
                />

                <Field
                  label="Preferred Consultation Time"
                  name="preferred_time"
                  value={form.preferred_time}
                  onChange={handleChange}
                />

                <div>
                  <label
                    htmlFor="consultation_medium"
                    className="font-medium text-gray-700"
                  >
                    Consultation Medium <span>*</span>
                  </label>
                  <select
                    id="consultation_medium"
                    name="consultation_medium"
                    value={form.consultation_medium}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`input ${
                      touched.consultation_medium &&
                      errors.consultation_medium
                        ? "border-red-400 focus:ring-red-300"
                        : ""
                    }`}
                  >
                    <option value="">Select medium</option>
                    <option value="Phone Consultation">
                      Phone Consultation
                    </option>
                    <option value="Tele Consultation">
                      Tele Consultation
                    </option>
                  </select>

                  {/* ✅ ONLY ADDED LINE */}
                  <p className="mt-2 text-sm text-gray-500">
                    Note: At the moment I offer phone or tele-consultation.
                  </p>
                </div>

                <div />

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="font-medium text-gray-700"
                  >
                    Reason for Consultation <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`input resize-none ${
                      touched.message && errors.message
                        ? "border-red-400 focus:ring-red-300"
                        : ""
                    }`}
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    aria-label="Submit enquiry form"
                    disabled={!isFormValid}
                    className={`w-full py-3 rounded-lg font-semibold cursor-pointer transition ${
                      isFormValid
                        ? "bg-[#355f4a] hover:bg-[#2f5341] text-white"
                        : "bg-gray-300 cursor-not-allowed text-gray-600"
                    }`}
                  >
                    Submit Enquiry
                  </button>
                </div>

                {status && (
                  <p className="md:col-span-2 text-sm text-center text-gray-700">
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* RIGHT – CONTACT */}
          <div className="md:col-span-2 md:sticky md:top-24 self-start">
            <div className="bg-[#e3efe6] rounded-xl p-8 min-h-[360px]">
              <h2 className="text-xl font-semibold text-gray-800">
                Prefer Direct Contact?
              </h2>

              <p className="mt-3 text-gray-600 text-sm">
                Reach out directly using the options below.
              </p>

              <div className="mt-8 space-y-4">
                <Contact
                  title="Call / Message"
                  value="+61 493 106 437"
                  href="tel:+61493106437"
                />
                <Contact
                  title="Email"
                  value="healwellnaturaltherapies@gmail.com"
                  href="mailto:healwellnaturaltherapies@gmail.com"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`input ${error ? "border-red-400 focus:ring-red-300" : ""}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function Contact({ title, value, href, blank }: ContactProps) {
  return (
    <a
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      className="contactCard"
    >
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-600 break-all">{value}</p>
    </a>
  );
}