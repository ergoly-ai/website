import { useState, useEffect, useRef, forwardRef } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import logoLight from "@/assets/logo-light.svg"
import neverForgetImg from "@/assets/never-forget.svg"
import doesWorkImg from "@/assets/does-work.svg"
import controllImg from "@/assets/controll.svg"
import teachImg from "@/assets/teach.svg"
import correctingImg from "@/assets/correcting.svg"
import scaleImg from "@/assets/scale.svg"
import mascotImg from "@/assets/mascot.png"

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, className: visible ? "animate-fade-up" : "opacity-0" }
}

const useCasesData = [
  {
    id: 'all',
    name: 'All Businesses',
    headline: 'Your inbox, handled',
    tasks: [
      'Monitors email, Slack, WhatsApp for you',
      'Writes drafts, or replies directly when confident',
      'Writes tasks from communication and executes them',
      'Learns from your behaviour to improve'
    ],
    benefit: 'Build it your way — your inbox becomes a launchpad, not a time sink'
  },
  {
    id: 'tax',
    name: 'Tax Advisory',
    headline: 'Tax prep on autopilot',
    tasks: [
      'Scans client documents and flags what\'s missing',
      'Cross-references against current tax code',
      'Pre-fills forms for your review',
      'Sends deadline reminders so nothing slips'
    ],
    benefit: 'Build it your way — focus on the details that matter'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    headline: 'Effortlessly prepared for every call',
    tasks: [
      'Keeps track of knowledge you build over time per client',
      'Gives you summaries before every call',
      'Creates action lists after calls',
      'Executes your playbook with clients'
    ],
    benefit: 'Walk into every meeting knowing more than they expect'
  },
  {
    id: 'coaching',
    name: 'Coaching',
    headline: 'Every session, fully prepped',
    tasks: [
      'Reviews client history before each call',
      'Applies your frameworks to analyze their state',
      'Handles booking and rescheduling',
      'Sends follow-up resources you discussed'
    ],
    benefit: 'Focus on the client while relying on your team of workers'
  },
  {
    id: 'legal',
    name: 'Legal Services',
    headline: 'Contracts and deadlines, handled',
    tasks: [
      'Drafts from your templates in minutes',
      'Tracks filing deadlines, sends reminders',
      'Prepares intake summaries for new clients',
      'Keeps documents organized by matter'
    ],
    benefit: 'Stay focused on strategy while the details are handled'
  },
  {
    id: 'custom',
    name: 'Your Industry',
    headline: 'Tell us what you need',
    tasks: [],
    isCustom: true
  }
] as const

const IndustryCarousel = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [customEmail, setCustomEmail] = useState('')
    const [customEmailError, setCustomEmailError] = useState('')
    const [customSubmitted, setCustomSubmitted] = useState(false)
    const [customSubmitting, setCustomSubmitting] = useState(false)
    const current = useCasesData[activeIndex]

    const goNext = () => setActiveIndex((i) => (i + 1) % useCasesData.length)
    const goPrev = () => setActiveIndex((i) => (i - 1 + useCasesData.length) % useCasesData.length)

    const handleCustomSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(customEmail)) {
        setCustomEmailError("Please enter a valid email address")
        return
      }
      setCustomEmailError("")
      setCustomSubmitting(true)

      try {
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5N3vMEKnC_OEZbTjQ0DFocAS3b85x4hqbsOAuYi7bhZxdTJJCj1A1D2UxbON5NXdN/exec"
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: customEmail, source: "industry_carousel" }),
        })
        setCustomSubmitted(true)
        setCustomEmail("")
      } catch {
        setCustomEmailError("Something went wrong. Please try again.")
      } finally {
        setCustomSubmitting(false)
      }
    }

    const isCustom = 'isCustom' in current && current.isCustom

    return (
      <section className="py-20 md:py-32">
        <div ref={ref} className={className}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-6">
                What your workers actually do
              </h2>
              <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                You decide what your workers handle. Here's what founders use them for most.
              </p>

              {/* Content Card with Arrows */}
              <div className="flex items-center gap-4">
                {/* Left Arrow */}
                <button
                  onClick={goPrev}
                  className="hidden md:flex items-center justify-center w-12 h-12 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Main Content Card */}
                <div className="flex-1 bg-card/50 rounded-2xl p-8 md:p-10 border border-border/30 min-h-[320px]">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                    {current.headline}
                  </h3>

                  {isCustom ? (
                    /* Custom Industry - Email Form */
                    <div className="max-w-md mx-auto text-center">
                      <p className="text-muted-foreground mb-6">
                        Every business is different. Tell us about yours and we'll show you how Ergoly can help.
                      </p>

                      {customSubmitted ? (
                        <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                          <p className="text-primary font-medium">Thanks! We'll be in touch soon.</p>
                        </div>
                      ) : (
                        <form onSubmit={handleCustomSubmit} className="space-y-4">
                          <div>
                            <input
                              type="email"
                              value={customEmail}
                              onChange={(e) => setCustomEmail(e.target.value)}
                              placeholder="your@email.com"
                              className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            />
                            {customEmailError && (
                              <p className="text-red-500 text-sm mt-2">{customEmailError}</p>
                            )}
                          </div>
                          <button
                            type="submit"
                            disabled={customSubmitting}
                            className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                          >
                            {customSubmitting ? "Sending..." : "Let's talk"}
                          </button>
                        </form>
                      )}
                    </div>
                  ) : (
                    /* Task Grid - 2x2 layout */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {current.tasks.map((task, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 p-4 rounded-xl bg-background/40 border border-border/20"
                        >
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-primary text-sm font-semibold">{i + 1}</span>
                          </div>
                          <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{task}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={goNext}
                  className="hidden md:flex items-center justify-center w-12 h-12 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors shrink-0"
                  aria-label="Next"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Mobile Arrows */}
              <div className="flex md:hidden justify-center gap-4 mt-6">
                <button
                  onClick={goPrev}
                  className="flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  className="flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Industry Selector - Text buttons with underline active state */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10">
                {useCasesData.map((uc, i) => (
                  <button
                    key={uc.id}
                    onClick={() => setActiveIndex(i)}
                    className={`text-sm md:text-base transition-colors pb-1 border-b-2 ${
                      activeIndex === i
                        ? 'text-primary border-primary font-medium'
                        : 'text-muted-foreground hover:text-foreground border-transparent'
                    }`}
                  >
                    {uc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

export function HomePage() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  const validateEmail = (value: string) => {
    if (!value) return "Please enter your email."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email."
    return ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const error = validateEmail(email)
    if (error) {
      setEmailError(error)
      return
    }
    setEmailError("")
    setSubmitting(true)
    try {
      const params = new URLSearchParams(window.location.search)
      const res = await fetch("https://script.google.com/macros/s/AKfycbwFDekSi8IVFmKMR4riZ2C6M4m-hCkL6Ou3Rm4dlewFSN-RZ2AJFW9pTbztFE3w00ZH/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          email,
          utm_source: params.get("utm_source") || "",
          utm_medium: params.get("utm_medium") || "",
          utm_campaign: params.get("utm_campaign") || "",
          referrer: document.referrer,
          device: /Mobile|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
          pageUrl: window.location.href,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setEmailError("Something went wrong. Please try again.")
      }
    } catch {
      setEmailError("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const problem = useReveal()
  const cards = useReveal()
  const howItWorks = useReveal()
  const useCases = useReveal()
  const waitlist = useReveal()

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <img src={logoLight} alt="Ergoly" className="h-7" />
            <Button
              size="sm"
              onClick={scrollToWaitlist}
              className="bg-[#0A7EA4] hover:bg-[#086080] text-white"
            >
              Join the Waitlist
            </Button>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              {/* Mascot */}
              <div
                className="flex justify-center animate-fade-up mb-4"
                style={{ animationDelay: "0s" }}
              >
                <img
                  src={mascotImg}
                  alt="Ergoly mascot"
                  className="h-48 md:h-56 w-auto"
                />
              </div>
              {/* Headlines grouped tightly */}
              <div className="space-y-1 mb-8">
                <h1
                  className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] animate-fade-up"
                  style={{ animationDelay: "0.15s" }}
                >
                  Scale your services
                </h1>
                <h2 className="text-primary text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] animate-fade-up"
                  style={{ animationDelay: "0.15s" }}>
                with AI workers that automatically learn<br />from your founder expertise
                </h2>
              </div>
              {/* More separation before paragraph */}
              <p
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up"
                style={{ animationDelay: "0.35s" }}
              >
                Your unique Ergoly workers automatically learn from watching you work and delivering your services alongside you.{" "}
                <span className="text-foreground font-medium">
                  No developers required.
                </span>
              </p>
              <div
                className="pt-8 animate-fade-up"
                style={{ animationDelay: "0.55s" }}
              >
                <Button
                  size="lg"
                  onClick={scrollToWaitlist}
                  className="bg-[#0A7EA4] hover:bg-[#086080] text-white text-base px-8"
                >
                  Join the Waitlist
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  get early access to your future of work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Quotes — Full Width Research Pool */}
        <section className="py-16 md:py-24 overflow-hidden">
          <div ref={problem.ref} className={problem.className}>
            <div className="w-full px-4">
              {/* Container with defined height */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">

                {/* === CENTER — THE BIG ONE === */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-[320px] md:max-w-[400px] z-10">
                  <p className="text-3xl md:text-4xl lg:text-5xl italic text-foreground leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "I wish I could clone myself."
                  </p>
                  <p className="mt-3 text-base text-muted-foreground">— Stefan, Architect</p>
                </div>

                {/* === TOP ROW === */}

                {/* Top left — TIER 1 (Large/Bright) */}
                <div className="hidden md:block absolute left-[18%] top-[5%] max-w-[240px] text-center opacity-90">
                  <p className="text-xl md:text-2xl italic text-foreground/90 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "Training new hires takes months."
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">— Anna-Lena, Immigration Law</p>
                </div>

                {/* Top right — TIER 2 (Medium) */}
                <div className="hidden md:block absolute right-[12%] top-[8%] max-w-[200px] text-center opacity-75">
                  <p className="text-base md:text-lg italic text-foreground/75 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "Quality drops when I'm stretched thin."
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">— Priya, PR Agency</p>
                </div>

                {/* Top center-right — TIER 3 (Small/Faint) */}
                <div className="hidden lg:block absolute right-[30%] top-[3%] max-w-[160px] text-center opacity-55">
                  <p className="text-sm italic text-foreground/60 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "Growth feels impossible."
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">— Kieran, IT Consulting</p>
                </div>

                {/* === MIDDLE ROW (sides only, center is the big quote) === */}

                {/* Middle left — TIER 2 (Medium) */}
                <div className="hidden lg:block absolute left-[8%] top-[42%] max-w-[200px] text-center opacity-75">
                  <p className="text-base md:text-lg italic text-foreground/75 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "They leave just when they get good."
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">— Thomas, Creative Agency</p>
                </div>

                {/* Middle right — TIER 1 (Large/Bright) */}
                <div className="hidden lg:block absolute right-[8%] top-[38%] max-w-[240px] text-center opacity-90">
                  <p className="text-xl md:text-2xl italic text-foreground/90 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "I can't keep up with client requests."
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">— Luciana, Marketing Strategy</p>
                </div>

                {/* === BOTTOM ROW === */}

                {/* Bottom left — TIER 1 (Large/Bright) */}
                <div className="hidden md:block absolute left-[12%] top-[78%] max-w-[260px] text-center opacity-90">
                  <p className="text-xl md:text-2xl italic text-foreground/90 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "Every new client means less time for existing ones."
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">— Oluwaseun, Wealth Management</p>
                </div>

                {/* Bottom right — TIER 2 (Medium) */}
                <div className="hidden md:block absolute right-[12%] top-[80%] max-w-[200px] text-center opacity-75">
                  <p className="text-base md:text-lg italic text-foreground/75 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "My clients want me, not my team."
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">— Henrik, Executive Coaching</p>
                </div>

                {/* Bottom center-left — TIER 3 (Small/Faint) */}
                <div className="hidden lg:block absolute left-[38%] top-[88%] max-w-[150px] text-center opacity-55">
                  <p className="text-sm italic text-foreground/60 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "There's only one of me."
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">— Yuki, Family Therapy</p>
                </div>

                {/* Bottom center-right — TIER 3 (Small/Faint) */}
                <div className="hidden lg:block absolute right-[32%] top-[90%] max-w-[160px] text-center opacity-50">
                  <p className="text-xs italic text-foreground/55 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "I'm exhausted but can't slow down."
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">— Fatima, Bookkeeping Services</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Problem — Text Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
                Your expertise doesn't scale. <span className="text-primary">Until now.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  You've spent years mastering your craft. Clients pay for your
                  judgment, your style, your standards. But you can't scale.
                  Before now, the only way to scale was to hire more people. That changes today.
                </p>
                <p>

                  With the power of Ergoly, you can now hire another you.
                  Ergoly's AI Workers know your clients, your preferences, and how you
                  make decisions. The best part? <span className="text-primary">They never get tired, they're always learning, and they never leave.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Built — 3 Cards with Illustrations */}
        <section className="py-20 md:py-32">
          <div ref={cards.ref} className={cards.className}>
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-20">
                  AI workers that act, learn, and stay unique.
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center space-y-4">
                    <div className="h-[140px] flex items-center justify-center mx-auto">
                      <img
                        src={doesWorkImg}
                        alt="AI workers that take action"
                        className="h-full w-auto"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">
                      They act, not just answer
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Email, Slack, calendar, CRM — your workers draft, schedule, research, and follow up all where you work.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Employees have preferences. <br /><span className="text-primary">Workers follow yours.</span>
                    </p>
                  </div>
                  <div className="text-center space-y-4">
                    <div className="h-[140px] flex items-center justify-center mx-auto">
                      <img
                        src={neverForgetImg}
                        alt="AI workers that remember everything"
                        className="h-full w-auto"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">
                      They adapt, not just repeat
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Correct once — it sticks. Your workers learn your
                      preferences, your edge cases, your judgment. Every correction compounds.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Employees get busy. <br /><span className="text-primary">Workers get smarter.</span>
                    </p>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="h-[140px] flex items-center justify-center mx-auto">
                      <img
                        src={controllImg}
                        alt="One space per client"
                        className="h-full w-auto"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">
                      They're dedicated, not shared
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Every client gets their own unique worker. Your workers stay
                      distinct so each one gets your personal 1:1 experience.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Employees spread thin. <br /><span className="text-primary">Workers stay dedicated.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32">
          <div ref={howItWorks.ref} className={howItWorks.className}>
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-20">
                  How it works
                </h2>
                <div className="grid md:grid-cols-3 gap-10">
                  <div className="space-y-4">
                    <div className="h-[180px] flex items-center justify-center">
                      <img
                        src={teachImg}
                        alt="Teach — upload documents and show the AI how you work"
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Teach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Show your AI workers how you work. Upload examples,
                      preferences, and documents — like writing a brief for a new
                      hire.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="h-[180px] flex items-center justify-center">
                      <img
                        src={correctingImg}
                        alt="Correct — every correction is permanently remembered"
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">Correct</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your workers do the work. You correct them — in Slack, in
                      email, in the dashboard. Every correction is permanent. They
                      never make the same mistake twice.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="h-[180px] flex items-center justify-center">
                      <img
                        src={scaleImg}
                        alt="Scale — deploy AI workers across all your channels"
                        className="h-full w-auto"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <h3 className="text-lg font-semibold">Scale</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your AI workers handle client work, use your tools, and
                      escalate when needed. They show up in Slack, in email,
                      wherever your clients are. Add more workers as you grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases — Industry Carousel */}
        <IndustryCarousel ref={useCases.ref} className={useCases.className} />

        {/* Waitlist — Key CTA */}
        <section id="waitlist" className="py-32 md:py-48">
          <div ref={waitlist.ref} className={waitlist.className}>
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Get early access.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-12">
                  We're onboarding founders one at a time.<br />
                  Leave your email — you'll hear from us personally.
                </p>
                {submitted ? (
                  <div className="py-12">
                    <div className="text-4xl mb-4">✓</div>
                    <p className="text-xl font-medium text-foreground">
                      You're on the list.
                    </p>
                    <p className="text-base text-muted-foreground mt-3">
                      We'll reach out personally when it's your turn.
                    </p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="flex gap-4 max-w-xl mx-auto">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          if (emailError) setEmailError("")
                        }}
                        className={`flex-1 px-5 py-4 rounded-lg bg-card border text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                          emailError
                            ? "border-red-500 focus:ring-red-500/50"
                            : "border-border"
                        }`}
                        placeholder="your@email.com"
                      />
                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        className="bg-[#0A7EA4] hover:bg-[#086080] text-white text-lg px-8 py-4 h-auto"
                      >
                        {submitting ? "Joining..." : "Join the Waitlist"}
                      </Button>
                    </form>
                    {emailError && (
                      <p className="text-sm text-red-400 mt-3 text-center">
                        {emailError}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10">
          <div className="container mx-auto px-6">
            <div className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
              <img src={logoLight} alt="Ergoly" className="h-5 inline-block" />
              {" — "}Your expertise, scaled.
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
