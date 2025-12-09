"use client"

import { useState } from "react"
import Glass from "./Glass"
import clsx from "clsx"
import { motion } from "framer-motion"

type InquiryType = "support" | "feedback" | "purchase" | ""

export default function GlassContactForm() {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState<InquiryType>("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const subjectOptions = [
    { value: "support", label: "Support Inquiry" },
    { value: "feedback", label: "Feedback Inquiry" },
    { value: "purchase", label: "Purchase Inquiry" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual email service)
    setTimeout(() => {
      setSubmitStatus("success")
      setIsSubmitting(false)
      // Reset form
      setTimeout(() => {
        setEmail("")
        setSubject("")
        setMessage("")
        setSubmitStatus("idle")
      }, 3000)
    }, 1500)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24">
      <Glass className="w-full max-w-3xl p-10 md:p-16 relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tl from-pink-500/15 to-orange-500/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto mb-6 rounded-full" />
            <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto">
              Have questions, feedback, or interested in our upcoming launch? We'd love to hear from you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-neutral-200">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className={clsx(
                  "w-full px-4 py-3 rounded-xl",
                  "bg-white/5 border border-white/10",
                  "text-white placeholder:text-neutral-500",
                  "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20",
                  "transition-all duration-200",
                  "backdrop-blur-sm"
                )}
              />
            </div>

            {/* Subject Dropdown */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-200">
                Inquiry Type
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value as InquiryType)}
                required
                className={clsx(
                  "w-full px-4 py-3 rounded-xl appearance-none",
                  "bg-white/5 border border-white/10",
                  subject === "" ? "text-neutral-500" : "text-white",
                  "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20",
                  "transition-all duration-200",
                  "backdrop-blur-sm",
                  "cursor-pointer",
                  "[&>option]:bg-neutral-900 [&>option]:text-white"
                )}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value="" disabled>
                  Select an inquiry type
                </option>
                {subjectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-neutral-200">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell us what's on your mind..."
                className={clsx(
                  "w-full px-4 py-3 rounded-xl",
                  "bg-white/5 border border-white/10",
                  "text-white placeholder:text-neutral-500",
                  "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20",
                  "transition-all duration-200",
                  "backdrop-blur-sm resize-none"
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className={clsx(
                  "w-full px-6 py-3.5 rounded-xl font-medium",
                  "transition-all duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50",
                  submitStatus === "success"
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : isSubmitting
                    ? "bg-white/60 text-black/60 cursor-wait"
                    : "bg-white text-black hover:bg-white/90 active:scale-[0.98]"
                )}
              >
                {submitStatus === "success"
                  ? "Message Sent!"
                  : isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </div>

            {/* Success Message */}
            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-400 text-sm"
              >
                Thanks for reaching out! We'll get back to you soon.
              </motion.p>
            )}
          </form>
        </motion.div>
      </Glass>
    </section>
  )
}
