import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle, FiCopy, FiCheckCircle } from "react-icons/fi";

const Contact = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.error) setStatus({ ...status, error: null });
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: "Please enter your name." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ loading: false, success: false, error: "Please enter a valid email address." });
      return;
    }
    if (formData.message.trim().length < 10) {
      setStatus({ loading: false, success: false, error: "Message must be at least 10 characters long." });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const apiBase = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Failed to send message.");
      }

      setStatus({
        loading: false,
        success: true,
        error: null
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 6000);
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.message || "Network error. Please try reaching out directly via email."
      });
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-accent-600 dark:text-accent-400 mb-2">
            // 06. Communication
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm">
            Interested in collaboration, internship positions, or software engineering discussions? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-300 flex items-center justify-center border border-slate-200 dark:border-dark-border">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400">Email</p>
                    <a
                      href={`mailto:${personal?.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      {personal?.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal?.email, "email")}
                  title="Copy email"
                  className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {copiedField === "email" ? (
                    <FiCheck className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <FiCopy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-300 flex items-center justify-center border border-slate-200 dark:border-dark-border">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400">Phone</p>
                    <a
                      href={`tel:${personal?.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      {personal?.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal?.phone, "phone")}
                  title="Copy phone"
                  className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {copiedField === "phone" ? (
                    <FiCheck className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <FiCopy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-300 flex items-center justify-center border border-slate-200 dark:border-dark-border">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase font-bold text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {personal?.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-xs text-slate-700 dark:text-slate-300 shadow-xs">
              <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                Response Time
              </span>
              I typically respond to inquiries within 24 hours.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                Send a Message
              </h3>

              {status.success && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2 font-medium">
                  <FiCheckCircle className="w-4 h-4 shrink-0" />
                  <span>Message sent successfully! Thank you for reaching out.</span>
                </div>
              )}

              {status.error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-xs flex items-center gap-2 font-medium">
                  <FiAlertCircle className="w-4 h-4 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono uppercase font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent-500 focus:bg-white dark:focus:bg-dark-surface transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono uppercase font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent-500 focus:bg-white dark:focus:bg-dark-surface transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono uppercase font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent-500 focus:bg-white dark:focus:bg-dark-surface transition-colors resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-accent-600 hover:bg-accent-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
