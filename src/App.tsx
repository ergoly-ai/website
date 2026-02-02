import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import logoLight from "@/assets/logo-light.svg"
import trainImg from "@/assets/train.png"
import correctImg from "@/assets/correct.png"
import deployImg from "@/assets/deploy.png"

function App() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

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
        <section className="pt-40 pb-28 md:pt-56 md:pb-44">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Train AI workers on your expertise.{" "}
                <span className="text-primary">Scale your service company.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ergoly is infrastructure for founders who run service companies
                with AI workers — trained on their domain expertise, learning
                from every correction, working alongside them.
                <br />
                No engineering team required.
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={scrollToWaitlist}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8"
                >
                  Join the Waitlist
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Early access. We onboard as capacity allows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-28 md:py-44">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
                Your expertise doesn't scale. Yet.
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
                  There would be so many jobs but I can not do them all
                </blockquote>
                <p className="mt-3 pl-4 text-sm text-muted-foreground">
                  — Stefan
                </p>
              </div>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  You've spent years mastering your craft. Clients pay for your
                  judgment, your style, your standards. But growing means
                  hiring — and training someone to think like you takes months.
                  When they leave, you start over.
                </p>
                <p>
                  AI tools are everywhere now. But they reset every conversation.
                  They don't know your clients, your preferences, or how you
                  make decisions. You end up repeating yourself more than you
                  would with a junior hire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Built — 3 Cards */}
        <section className="py-28 md:py-44">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
                AI workers that learn. Remember. And get better.
              </h2>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-lg">
                    🧠
                  </div>
                  <h3 className="text-lg font-semibold">
                    They remember everything.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Correct once — it sticks. Your AI workers learn your
                    preferences, your edge cases, your judgment. Every correction
                    compounds. They get sharper, not just busier.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-lg">
                    ⚡
                  </div>
                  <h3 className="text-lg font-semibold">
                    They do things, not just answer.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Email, Slack, calendar, CRM — your AI workers use your
                    tools. They draft, schedule, research, and follow up. Ergoly
                    is their workspace.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-lg">
                    🎯
                  </div>
                  <h3 className="text-lg font-semibold">
                    You stay in control.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    When something needs your judgment, the AI worker hands it to
                    you. You handle the edge decisions. The AI handles the
                    volume.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-28 md:py-44">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
                How it works
              </h2>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="space-y-4">
                  <div className="h-[160px] rounded-xl overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src={trainImg}
                      alt="Teach — upload documents and show the AI how you work"
                      className="h-full w-full object-contain p-4"
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
                  <div className="h-[160px] rounded-xl overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src={correctImg}
                      alt="Correct — every correction is permanently remembered"
                      className="h-full w-full object-contain p-4"
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
                  <div className="h-[160px] rounded-xl overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src={deployImg}
                      alt="Scale — deploy AI workers across all your channels"
                      className="h-full w-full object-contain p-4"
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
        </section>

        {/* Why Now */}
        <section className="py-28 md:py-44">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
                Service companies are about to change forever.
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Margins are shrinking. Clients expect more for less. Hiring is
                  slow, expensive, and fragile. The math of running a service
                  company is breaking — unless you change what a team looks
                  like.
                </p>
                <p>
                  A new kind of company is forming. One founder. A team of AI
                  workers trained on their expertise. The output of a 10-person
                  firm — with the quality of a personal touch.
                </p>
                <p>
                  We're building the infrastructure for these companies. Like
                  Shopify gave anyone a storefront, Ergoly gives any domain
                  expert an AI workforce. Your workers live here — with
                  everything they've learned, every tool they use, every
                  correction that made them sharper.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="py-28 md:py-44">
          <div className="container mx-auto px-6">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Get early access.
              </h2>
              <p className="text-muted-foreground mb-10">
                We're onboarding founders one at a time. Leave your email —
                you'll hear from us personally.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  // TODO: wire up form submission
                }}
                className="flex gap-3"
              >
                <input
                  type="email"
                  required
                  className="flex-1 px-4 py-2.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="you@example.com"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-6"
                >
                  Join the Waitlist
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-6">
                You'll hear from our founder personally.
              </p>
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

export default App
