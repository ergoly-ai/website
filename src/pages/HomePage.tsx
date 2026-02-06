import { useState, useEffect, useRef } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import logoLight from "@/assets/logo-light.svg"
import logoSlack from "@/assets/logos/slack.svg"
import logoGmail from "@/assets/logos/gmail.svg"
import logoOutlook from "@/assets/logos/outlook.svg"
import logoGcal from "@/assets/logos/gcal.svg"
import logoNotion from "@/assets/logos/notion.svg"
import logoZoom from "@/assets/logos/zoom.svg"
import logoAsana from "@/assets/logos/asana.svg"
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
  const whyNow = useReveal()
  const waitlist = useReveal()

  const brands = [
    { name: "Slack", src: logoSlack },
    { name: "Gmail", src: logoGmail },
    { name: "Outlook", src: logoOutlook },
    { name: "Google Calendar", src: logoGcal },
    { name: "Notion", src: logoNotion },
    { name: "Zoom", src: logoZoom },
    { name: "Asana", src: logoAsana },
  ]
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const count = brands.length

    const tick = () => {
      if (track.children.length < count * 2) return
      const eighth = track.children[count] as HTMLElement
      const widthOfFirstSet = eighth ? eighth.offsetLeft : track.scrollWidth / 2
      const speed = 40 / 60
      offsetRef.current += speed
      if (offsetRef.current >= widthOfFirstSet) {
        for (let i = 0; i < count; i++) {
          const node = track.firstElementChild
          if (node) track.appendChild(node)
        }
        offsetRef.current -= widthOfFirstSet
      }
      track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

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
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Join the Waitlist
            </Button>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-44 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center space-y-4">
              {/* Mascot */}
              <div
                className="flex justify-center animate-fade-up"
                style={{ animationDelay: "0s" }}
              >
                <img
                  src={mascotImg}
                  alt="Ergoly mascot"
                  className="h-48 md:h-56 w-auto"
                />
              </div>
              <h1
                className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] animate-fade-up"
                style={{ animationDelay: "0.15s" }}
              >
                Scale your services
              </h1>
              <h2 className="text-primary text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] animate-fade-up"
                style={{ animationDelay: "0.15s" }}>
              with AI workers that automatically<br />learn from your founder expertise
              </h2>
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
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8"
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

        {/* Logo carousel */}
        <section className="py-12 md:py-16 overflow-hidden">
          <div ref={trackRef} className="flex flex-nowrap w-max gap-16 md:gap-24 items-center will-change-transform">
            {[...brands, ...brands].map((brand, i) => (
              <img
                key={`${brand.name}-${i}`}
                src={brand.src}
                alt={brand.name}
                className="h-8 md:h-10 w-auto object-contain opacity-80 flex-shrink-0"
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            and thousands more
          </p>
        </section>

        {/* Problem */}
        <section className="py-20 md:py-32">
          <div ref={problem.ref} className={problem.className}>
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
                  Your expertise doesn't scale. <span className="text-primary">Until now.</span>
                </h2>
                <div className="mb-12 relative">
                  <span
                    className="absolute -top-6 -left-2 text-7xl text-primary/20 leading-none select-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    "
                  </span>
                  <blockquote
                    className="pl-4 text-2xl md:text-3xl italic text-foreground/80 leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    I just want to hire another me.
                  </blockquote>
                  <p className="mt-3 pl-4 text-sm text-muted-foreground">
                    — Stefan
                  </p>
                </div>
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
          </div>
        </section>

        {/* What We Built — 3 Cards with Illustrations */}
        <section className="py-20 md:py-32">
          <div ref={cards.ref} className={cards.className}>
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
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

        {/* Why Now */}
        <section className="py-20 md:py-32">
          <div ref={whyNow.ref} className={whyNow.className}>
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
                  It's time to scale without hiring.
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Your margins are under pressure. Clients want more for less.
                    Hiring is slow, expensive, and when someone leaves you start
                    over. The way you've always run your firm doesn't scale — unless
                    you change what your team looks like.
                  </p>
                  <p>
                    AI can do real work now. The bottleneck isn't the technology
                    anymore. It's having workers that learn your standards, use
                    your tools, and don't cross wires between clients. That's what
                    we're building.
                  </p>
                  <p>
                    Ergoly gives you an AI workforce trained on your expertise.
                    Your workers live here — everything they've learned, every
                    correction that made them sharper. You get the output of a
                    bigger firm with the quality of your personal touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="py-20 md:py-32">
          <div ref={waitlist.ref} className={waitlist.className}>
            <div className="container mx-auto px-6">
              <div className="max-w-lg mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Get early access.
                </h2>
                <p className="text-muted-foreground mb-10">
                  We're onboarding founders one at a time. Leave your email —
                  you'll hear from us personally.
                </p>
                {submitted ? (
                  <div className="py-8">
                    <div className="text-2xl mb-2">✓</div>
                    <p className="text-lg font-medium text-foreground">
                      You're on the list.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      We'll reach out personally when it's your turn.
                    </p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="flex gap-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          if (emailError) setEmailError("")
                        }}
                        className={`flex-1 px-4 py-2.5 rounded-lg bg-card border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                          emailError
                            ? "border-red-500 focus:ring-red-500/50"
                            : "border-border"
                        }`}
                        placeholder="you@example.com"
                      />
                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-6"
                      >
                        {submitting ? "Joining..." : "Join the Waitlist"}
                      </Button>
                    </form>
                    {emailError && (
                      <p className="text-sm text-red-400 mt-2 text-left">
                        {emailError}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-6">
                      You'll hear from our founder personally.
                    </p>
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
              {" — "}Your expertise, deployed.
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
