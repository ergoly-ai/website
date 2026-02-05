import { ThemeProvider } from "@/components/theme-provider"
import { Link } from "react-router-dom"
import logoLight from "@/assets/logo-light.svg"

export function InvestorPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/">
              <img src={logoLight} alt="Ergoly" className="h-7" />
            </Link>
          </div>
        </nav>

        <section className="pt-32 pb-20 md:pt-44 md:pb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                Infrastructure for the AI-powered service company.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ergoly is building the platform that lets domain experts deploy and
                scale AI workers trained on their expertise — without an engineering
                team. We're going after the massive, fragmented market of service
                businesses that have been left behind by generic AI tools.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">The opportunity</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Service companies — agencies, consultancies, freelancers — run on
                  human expertise. That expertise doesn't scale. Hiring is slow and
                  brittle. Generic AI resets every conversation and doesn't learn
                  from corrections. We give founders an AI workforce that remembers,
                  uses their tools, and improves over time. Like Shopify for
                  storefronts, Ergoly for AI workers.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">Why now</h2>
                <p className="text-muted-foreground leading-relaxed">
                  LLMs are good enough to do real work. The bottleneck is no longer
                  model capability but orchestration, memory, and tool use. We're
                  building the layer that turns "AI that answers" into "AI workers
                  that execute" — trained on each founder's domain and corrections.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">For investors</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're early. If you're interested in learning more about our
                  vision, traction, and plans, reach out at{" "}
                  <a
                    href="mailto:investors@ergoly.com"
                    className="text-primary hover:underline"
                  >
                    investors@ergoly.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 mt-20 border-t border-border">
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
