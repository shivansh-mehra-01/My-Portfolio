"use client";

import { useState, useEffect } from "react";
import { Send, Terminal as TerminalIcon, Phone, Mail, MapPin, ArrowLeft, ArrowRight, Check, Sparkles, Cpu, Layers, Smartphone } from "lucide-react";

function GithubIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [ticketId, setTicketId] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const svc = params.get("service");
      if (svc) {
        const mappings: Record<string, string> = {
          ai: "AI & Automation",
          automation: "AI & Automation",
          web: "Web Platform",
          mvp: "Web Platform",
          mobile: "Mobile App",
          ui: "UI/UX & Styling"
        };
        const selected = mappings[svc.toLowerCase()];
        if (selected) {
          setFormData((prev) => ({ ...prev, project: selected }));
          setStep(2);
        }
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectService = (service: string) => {
    setFormData((prev) => ({ ...prev, project: service }));
    setStep(2);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);
    
    try {
      // API call to Web3Forms to send email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // NEXUS Web3Forms Access Key
          access_key: "fff30753-c3cf-4206-9b9d-17427151cc69", 
          name: formData.name,
          email: formData.email,
          project_type: formData.project,
          message: formData.message,
          subject: "New Project Inquiry from Shivansh Mehra Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Generate secure boarding pass info
        const tId = "SM-" + Math.random().toString(36).substring(2, 9).toUpperCase();
        const current = new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        });
        setTicketId(tId);
        setTimestamp(current);

        setIsSubmitting(false);
        setIsSubmitted(true);
        setStep(4);
      } else {
        console.error("Error submitting form", result);
        setIsSubmitting(false);
        alert("Something went wrong submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submit error:", error);
      setIsSubmitting(false);
      alert("Network error. Please try again.");
    }
  };

  const canProceedToStep3 = formData.name.trim() !== "" && formData.email.trim() !== "" && formData.email.includes("@");

  const greenAccent = "#00e676";
  const darkSurface = "#0d1116";
  const borderSoft = "rgba(255,255,255,0.06)";

  return (
    <div
      style={{
        padding: "140px 0 80px",
        minHeight: "100vh",
        fontFamily: "var(--font-manrope), sans-serif",
      }}
      className="container"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left Side Copy & HUD */}
        <div className="reveal-text">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "20px", height: "2px", background: greenAccent }} />
            <span className="eyebrow-mono" style={{ color: greenAccent, letterSpacing: "0.15em", fontSize: "0.75rem", fontWeight: 700 }}>
              CONTACT
            </span>
          </div>
          <h1
            className="hero-title font-display"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "24px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            Ready to Build Your <br />
            Next <span style={{ color: greenAccent }}>Digital</span> <br />
            <span style={{ 
              background: "linear-gradient(90deg, #6ae372 0%, #d89648 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block"
            }}>Product?</span>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.15rem",
              lineHeight: "1.7",
              marginBottom: "48px",
              maxWidth: "480px",
              fontFamily: "var(--font-space-grotesk), sans-serif",
            }}
          >
            Tell me about your project or startup concept. Let's align on details, timeline, and deliverables.
          </p>

          {/* Minimal Availability Card */}
          <div style={{
            position: "relative",
            background: "transparent",
            border: `1px solid var(--card-border)`,
            borderRadius: "16px",
            padding: "32px",
            marginBottom: "48px",
            maxWidth: "480px"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid var(--card-border)`, paddingBottom: "20px", marginBottom: "20px" }}>
              <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.8rem", color: "var(--foreground)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
                Availability
              </span>
              <span style={{ color: "var(--foreground)", display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono), monospace", fontSize: "0.75rem", fontWeight: 700 }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--foreground)" }} />
                ACCEPTING NEW PROJECTS
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                I am currently open for freelance opportunities and full-time roles. If you have an exciting project, let's discuss how I can help bring it to life.
              </p>
            </div>
          </div>

          {/* Social Icons Redesign */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: <Phone size={18} />, link: "https://wa.me/919303164688?text=Hello", color: greenAccent },
              { icon: <Mail size={18} />, link: "mailto:mehrashiv8889@gmail.com", color: greenAccent },
              { icon: <LinkedinIcon size={18} />, link: "https://linkedin.com/in/shivanshmehra01", color: "#cbd5e1" },
              { icon: <GithubIcon size={18} />, link: "https://github.com/shivansh-mehra-01", color: "#cbd5e1" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: `1px solid ${borderSoft}`,
                  color: item.color,
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                  e.currentTarget.style.borderColor = borderSoft;
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Wizard Cards */}
        <div>
          {step <= 3 ? (
            <div style={{ 
              background: darkSurface, 
              border: `1px solid ${borderSoft}`, 
              borderRadius: "24px", 
              padding: "40px",
              minHeight: "560px", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}>
              {/* Step indicator header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${borderSoft}`, paddingBottom: "24px", marginBottom: "32px" }}>
                <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.85rem", color: greenAccent, fontWeight: 700, letterSpacing: "0.05em" }}>
                  STEP 0{step} / 03
                </span>
                <span style={{ color: "#3b82f6", fontSize: "0.85rem", fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 500 }}>
                  {step === 1 ? "Choose service focus" : step === 2 ? "Provide identity links" : "Submit vision details"}
                </span>
              </div>

              {/* Wizard Step 1: Services Choices */}
              {step === 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", flex: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", color: "#ffffff", fontWeight: 700, margin: "0 0 8px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    Select your project category:
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    {[
                      { id: "AI & Automation", title: "AI Solutions", desc: "LLMs, Automations, Agents", icon: <Cpu size={22} style={{ color: greenAccent }} /> },
                      { id: "Web Platform", title: "Web Dev", desc: "Next.js core structures", icon: <Layers size={22} style={{ color: "#00e5ff" }} /> },
                      { id: "Mobile App", title: "Mobile Client", desc: "Flutter mobile platforms", icon: <Smartphone size={22} style={{ color: "#ffd600" }} /> },
                      { id: "UI/UX & Styling", title: "UI/UX & Design", desc: "Modern styling interfaces", icon: <Sparkles size={22} style={{ color: "#ff007f" }} /> }
                    ].map((svc) => (
                      <div
                        key={svc.id}
                        onClick={() => selectService(svc.id)}
                        style={{
                          background: "#0b0f12",
                          border: `1px solid ${borderSoft}`,
                          borderRadius: "16px",
                          padding: "24px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          display: "flex",
                          flexDirection: "column",
                          gap: "16px"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = borderSoft;
                          e.currentTarget.style.transform = "none";
                        }}
                      >
                        <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {svc.icon}
                        </div>
                        <div>
                          <h3 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: 700, marginBottom: "4px", fontFamily: "var(--font-space-grotesk), sans-serif" }}>{svc.title}</h3>
                          <p style={{ color: "#64748b", fontSize: "0.8rem", margin: 0 }}>{svc.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wizard Step 2: Name & Email */}
              {step === 2 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "28px", flex: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", color: "#ffffff", fontWeight: 700, margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    How should we address you?
                  </h3>
                  <div className="contact-input-wrapper">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="contact-input-field"
                      placeholder="John Doe"
                      autoFocus
                    />
                  </div>

                  <div className="contact-input-wrapper">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-input-field"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div style={{ display: "flex", gap: "16px", marginTop: "auto", paddingTop: "20px" }}>
                    <button
                      onClick={() => setStep(1)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(255,255,255,0.02)",
                        border: `1px solid ${borderSoft}`,
                        padding: "14px 28px",
                        borderRadius: "28px",
                        color: "#cbd5e1",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = greenAccent}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = borderSoft}
                    >
                      <ArrowLeft size={14} /> Back
                    </button>

                    <button
                      disabled={!canProceedToStep3}
                      onClick={() => setStep(3)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: canProceedToStep3 ? greenAccent : "rgba(255,255,255,0.02)",
                        border: "none",
                        padding: "14px 28px",
                        borderRadius: "28px",
                        color: canProceedToStep3 ? "#000000" : "#64748b",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        fontWeight: canProceedToStep3 ? 700 : 400,
                        cursor: canProceedToStep3 ? "pointer" : "not-allowed",
                        boxShadow: canProceedToStep3 ? `0 4px 15px rgba(0,230,118,0.3)` : "none",
                        flex: 1,
                        transition: "all 0.3s"
                      }}
                    >
                      Next Step <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* Wizard Step 3: Project Vision Message & Submit */}
              {step === 3 && (
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px", flex: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", color: "#ffffff", fontWeight: 700, margin: 0, fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    Share your vision with me:
                  </h3>
                  <div className="contact-input-wrapper">
                    <label>Project Brief details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="contact-input-field"
                      style={{ resize: "none" }}
                      placeholder="Describe your timeline, goals, core specifications, and requirements..."
                      autoFocus
                    />
                  </div>

                  <div style={{ display: "flex", gap: "16px", marginTop: "auto", paddingTop: "20px" }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(255,255,255,0.02)",
                        border: `1px solid ${borderSoft}`,
                        padding: "14px 28px",
                        borderRadius: "28px",
                        color: "#cbd5e1",
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = greenAccent}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = borderSoft}
                    >
                      <ArrowLeft size={14} /> Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting || formData.message.trim() === ""}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        background: (isSubmitting || formData.message.trim() === "") ? "rgba(255,255,255,0.02)" : greenAccent,
                        border: "none",
                        color: (isSubmitting || formData.message.trim() === "") ? "#64748b" : "#000000",
                        padding: "14px 28px",
                        borderRadius: "28px",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono), monospace",
                        cursor: formData.message.trim() === "" ? "not-allowed" : "pointer",
                        boxShadow: (isSubmitting || formData.message.trim() === "") ? "none" : `0 4px 20px rgba(0,230,118,0.3)`,
                        flex: 1,
                        transition: "all 0.3s",
                      }}
                    >
                      {isSubmitting ? "Initializing Transmission..." : "Initialize Project Brief"}{" "}
                      <Send size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Step 4: Success Message */
            <div style={{ padding: "40px", background: "transparent", border: `1px solid var(--card-border)`, borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "24px" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--foreground)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--background)" }}>
                <Check size={32} />
              </div>
              <div>
                <h3 style={{ margin: "0 0 12px", fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>
                  Message Received
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: "1.6", margin: 0, maxWidth: "300px" }}>
                  Thank you for reaching out. I'll review your project details and get back to you within 24 hours.
                </p>
              </div>
              <button
                onClick={() => {
                  setFormData({ name: "", email: "", project: "", message: "" });
                  setTicketId("");
                  setTimestamp("");
                  setIsSubmitted(false);
                  setStep(1);
                }}
                style={{
                  background: "transparent",
                  border: `1px solid var(--card-border)`,
                  color: "#ffffff",
                  padding: "12px 28px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-mono), monospace",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  marginTop: "16px",
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--foreground)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--card-border)"}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
