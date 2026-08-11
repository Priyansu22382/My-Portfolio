import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    toast.success(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    // Simulate email dispatch
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    toast.success("Thank you! Your message has been sent successfully.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
            <MessageSquare size={14} /> Let's Connect & Collaborate
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Have an open software engineer position, project inquiry, or technical collaboration? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Status Card */}
            <div className="glass-card p-6 rounded-2xl border border-primary/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Software Engineering Roles
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Let's Build Something Great Together
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Currently working as Software Engineer at V.Vang Solutions and actively open to exciting engineering challenges and scalable full-stack web/AI projects.
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="glass-card p-6 rounded-2xl border border-border space-y-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Contact Details
              </h4>
              
              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/40 border border-border/60">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Email</span>
                    <a href="mailto:priyanshunigam987@gmail.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      priyanshunigam987@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("priyanshunigam987@gmail.com", "Email")}
                  className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedField === "Email" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/40 border border-border/60">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Phone / WhatsApp</span>
                    <a href="tel:9315580536" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      +91 93155-80536
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("+919315580536", "Phone")}
                  className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy Phone"
                >
                  {copiedField === "Phone" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border/60">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Location</span>
                  <span className="text-sm font-semibold text-foreground">Delhi, INDIA</span>
                </div>
              </div>

            </div>

            {/* Social Accounts */}
            <div className="glass-card p-6 rounded-2xl border border-border space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Online Profiles
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/priyanshu-nigam-845399269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary text-xs font-semibold text-foreground border border-border transition-all w-full justify-center"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://github.com/Priyansu22382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary text-xs font-semibold text-foreground border border-border transition-all w-full justify-center"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href="https://x.com/PriyanshuTechie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary text-xs font-semibold text-foreground border border-border transition-all w-full justify-center"
                >
                  <Twitter size={16} /> Twitter
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-border space-y-6 text-left shadow-2xl">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Send Me a Message</h3>
                <p className="text-xs text-muted-foreground">Fill out the form below and I'll respond as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-foreground mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="e.g. Priyanshu Nigam"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-foreground mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Hi Priyanshu, I'd like to discuss an engineering role / project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cosmic-button w-full py-3 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
