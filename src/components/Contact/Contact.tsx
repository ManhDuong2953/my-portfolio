"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import BlurText from "@/components/BlurText/BlurText";
import emailjs from "emailjs-com";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstname?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstname.trim())
      newErrors.firstname = "First name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData as any,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      setSubmitStatus("success");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto py-20 w-full max-w-6xl">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-bold text-3xl md:text-4xl"
        >
          <div className="flex justify-center items-center">
            <BlurText
              text="Get In Touch"
              animateBy="words"
              delay={50}
              direction="top"
            />
          </div>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-slate-400"
        >
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-2xl"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 backdrop-blur-sm p-6 sm:p-8 border border-white/10 rounded-2xl"
        >
          <div>
            <h3 className="mb-2 font-semibold text-white text-2xl">
              Let&apos;s work together
            </h3>
            <p className="mb-6 text-slate-400">
              Fill in the form below to start a conversation
            </p>
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-500/20 p-4 border border-green-500/30 rounded-lg text-green-300">
              Your message has been sent successfully! I&apos;ll get back to you
              soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="bg-red-500/20 p-4 border border-red-500/30 rounded-lg text-red-300">
              There was an error sending your message. Please try again.
            </div>
          )}

          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First name *"
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 outline-none ${
                  errors.firstname ? "border-red-500" : "border-white/20"
                }`}
              />
              {errors.firstname && (
                <p className="mt-1 text-red-400 text-sm">{errors.firstname}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last name"
                className="bg-white/5 px-4 py-3 border border-white/20 focus:border-blue-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-400/20 w-full text-white transition-all duration-300 placeholder-slate-400"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address *"
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 outline-none ${
                  errors.email ? "border-red-500" : "border-white/20"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number (optional)"
                className="bg-white/5 px-4 py-3 border border-white/20 focus:border-blue-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-400/20 w-full text-white transition-all duration-300 placeholder-slate-400"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 outline-none h-32 resize-none ${
                errors.message ? "border-red-500" : "border-white/20"
              }`}
              placeholder="Tell me about your project or inquiry *"
            />
            {errors.message && (
              <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 hover:from-blue-500 to-purple-600 hover:to-purple-500 disabled:opacity-50 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </motion.button>
            {isSubmitting && (
              <p className="text-slate-400 text-sm">Please wait...</p>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
