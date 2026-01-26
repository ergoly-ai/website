import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, TrendingUp, Zap, Shield } from "lucide-react"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold">Ergoly</div>
            <div className="flex gap-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium mb-4">
              The Shopify for Services Companies
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance">
              Scale Your Service Business With AI Workers
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Deploy trained AI team members who handle client communication, learn from feedback, and coordinate work together. Serve 3-5x more clients without hiring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required. Set up in 10 minutes.
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Every service business hits the same wall
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-5xl">⏰</div>
                  <h3 className="text-xl font-semibold">Can't Scale</h3>
                  <p className="text-muted-foreground">
                    You're maxed out at 15-20 clients. Hiring is expensive and takes months to train someone who understands your clients.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl">🔥</div>
                  <h3 className="text-xl font-semibold">Always On Call</h3>
                  <p className="text-muted-foreground">
                    Clients message at all hours. You're stuck being the bottleneck for every question, update, and request.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl">😰</div>
                  <h3 className="text-xl font-semibold">Inconsistent Quality</h3>
                  <p className="text-muted-foreground">
                    Some clients get quick responses and great service. Others slip through the cracks. It's impossible to maintain quality at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Meet Your AI Team
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-16">
                Ergoly gives you trained AI workers who show up in your clients' Slack. They communicate naturally, learn what each client prefers, and get better over time.
              </p>

              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3 space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Emma, Account Manager</h3>
                    <p className="text-muted-foreground">
                      Handles client questions, provides updates, schedules meetings, and ensures nothing falls through the cracks. Available 24/7.
                    </p>
                  </div>
                  <div className="md:w-2/3 bg-muted/50 rounded-lg p-6 border">
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary rounded flex-shrink-0 flex items-center justify-center text-xs font-bold">E</div>
                        <div>
                          <div className="font-semibold mb-1">Emma</div>
                          <div>Hey Sarah! Quick update on the Q1 campaign - we're tracking 20% above target on conversions. The team wrapped up the competitor analysis you asked about. I'll have Jake share findings tomorrow morning. Anything else you need from us this week?</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 opacity-60">
                        <div className="w-8 h-8 bg-muted-foreground rounded flex-shrink-0"></div>
                        <div className="text-muted-foreground">Sarah reacted with 👍</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
                  <div className="md:w-1/3 space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Jake, Project Manager</h3>
                    <p className="text-muted-foreground">
                      Coordinates deliverables, tracks timelines, and keeps clients informed on progress. Works with Emma to deliver seamlessly.
                    </p>
                  </div>
                  <div className="md:w-2/3 bg-muted/50 rounded-lg p-6 border">
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded flex-shrink-0 flex items-center justify-center text-xs font-bold">J</div>
                        <div>
                          <div className="font-semibold mb-1">Jake</div>
                          <div>Morning! Competitor analysis complete - found 3 positioning opportunities we should discuss. Emma mentioned you wanted this by EOD but we finished early. I've created a doc with findings + next steps. Want to schedule 30min this week to review?</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3 space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Alex, Operations Lead</h3>
                    <p className="text-muted-foreground">
                      Manages processes, onboards new clients, handles billing questions, and ensures smooth operations across all accounts.
                    </p>
                  </div>
                  <div className="md:w-2/3 bg-muted/50 rounded-lg p-6 border">
                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded flex-shrink-0 flex items-center justify-center text-xs font-bold">A</div>
                        <div>
                          <div className="font-semibold mb-1">Alex</div>
                          <div>Welcome aboard! I've set up your workspace and added Emma as your main point of contact. She'll reach out today to kick things off. Your first strategy call is scheduled for Thursday at 2pm. Let me know if you need anything!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-16">
                Set up your AI team in minutes. No technical skills required.
              </p>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-3 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto">1</div>
                  <h3 className="text-lg font-semibold">Choose Your Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Pick from pre-trained AI workers (Emma, Jake, Alex) or create custom roles.
                  </p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto">2</div>
                  <h3 className="text-lg font-semibold">Connect Slack</h3>
                  <p className="text-sm text-muted-foreground">
                    One-click Slack integration. Your workers appear in client channels instantly.
                  </p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto">3</div>
                  <h3 className="text-lg font-semibold">Add Clients</h3>
                  <p className="text-sm text-muted-foreground">
                    Invite clients to Slack. Each gets their own trained team that learns their preferences.
                  </p>
                </div>
                <div className="space-y-3 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto">4</div>
                  <h3 className="text-lg font-semibold">Train With Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    React with 👍 or 👎 to messages. Your workers learn and improve automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                The Difference You'll Feel Immediately
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 border rounded-lg">
                  <Zap className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">3-5x More Clients</h3>
                  <p className="text-muted-foreground">
                    Go from 15 clients maxed out to 50+ with the same core team. Your AI workers handle routine communication, coordination, and updates while you focus on strategic work.
                  </p>
                </div>

                <div className="space-y-4 p-6 border rounded-lg">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Learns Your Clients</h3>
                  <p className="text-muted-foreground">
                    Each client gets workers trained specifically for them. The system learns communication preferences, project history, and what makes each client happy - automatically.
                  </p>
                </div>

                <div className="space-y-4 p-6 border rounded-lg">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Works Where Clients Are</h3>
                  <p className="text-muted-foreground">
                    No new tools for clients to learn. Your workers show up in Slack, where clients already communicate. They see familiar faces and get instant responses.
                  </p>
                </div>

                <div className="space-y-4 p-6 border rounded-lg">
                  <Shield className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">You Stay In Control</h3>
                  <p className="text-muted-foreground">
                    Review every message, guide with emoji feedback, and watch quality metrics in real-time. Your workers improve based on what you teach them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Different */}
        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Ergoly Is Different
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-16">
                This isn't a chatbot or AI assistant. It's a complete operating system for running your service business.
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg bg-background">
                    <div className="font-semibold mb-2">❌ Generic AI Tools</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Forgets context between messages</li>
                      <li>• One-size-fits-all responses</li>
                      <li>• You do all the coordination</li>
                      <li>• Clients need training on new tools</li>
                    </ul>
                  </div>
                  <div className="p-6 border-2 border-primary rounded-lg bg-primary/5">
                    <div className="font-semibold mb-2">✓ Ergoly Workers</div>
                    <ul className="space-y-2 text-sm">
                      <li>• Remembers full client history</li>
                      <li>• Learns each client's preferences</li>
                      <li>• Workers coordinate with each other</li>
                      <li>• Works in Slack, no learning curve</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg bg-background">
                    <div className="font-semibold mb-2">❌ Developer Frameworks (Letta, LangChain)</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Requires coding to set up</li>
                      <li>• Build everything yourself</li>
                      <li>• No client management</li>
                      <li>• You handle training data</li>
                    </ul>
                  </div>
                  <div className="p-6 border-2 border-primary rounded-lg bg-primary/5">
                    <div className="font-semibold mb-2">✓ Ergoly Platform</div>
                    <ul className="space-y-2 text-sm">
                      <li>• Set up in 10 minutes, no code</li>
                      <li>• Pre-built workers and workflows</li>
                      <li>• Built-in client management</li>
                      <li>• Learns from your emoji feedback</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg bg-background">
                    <div className="font-semibold mb-2">❌ Traditional CRM/Project Tools</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Tracks work, doesn't do it</li>
                      <li>• You write every message</li>
                      <li>• Manual status updates</li>
                      <li>• Another tool to check</li>
                    </ul>
                  </div>
                  <div className="p-6 border-2 border-primary rounded-lg bg-primary/5">
                    <div className="font-semibold mb-2">✓ Ergoly Operating System</div>
                    <ul className="space-y-2 text-sm">
                      <li>• Actually does the work</li>
                      <li>• Workers write client messages</li>
                      <li>• Automatic coordination & updates</li>
                      <li>• One platform for everything</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Built For Service Businesses Like Yours
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg space-y-3">
                  <div className="text-4xl">📱</div>
                  <h3 className="text-lg font-semibold">Marketing Agencies</h3>
                  <p className="text-sm text-muted-foreground">
                    Handle client updates, campaign reports, content approvals, and strategy questions without adding headcount.
                  </p>
                </div>

                <div className="p-6 border rounded-lg space-y-3">
                  <div className="text-4xl">💼</div>
                  <h3 className="text-lg font-semibold">Consulting Firms</h3>
                  <p className="text-muted-foreground text-sm">
                    Manage multiple engagements, coordinate deliverables, and maintain client relationships at scale.
                  </p>
                </div>

                <div className="p-6 border rounded-lg space-y-3">
                  <div className="text-4xl">⚖️</div>
                  <h3 className="text-lg font-semibold">Professional Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep clients informed, coordinate between team members, handle routine inquiries 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Start With 3 Workers, Unlimited Clients
              </h2>
              <p className="text-xl text-muted-foreground">
                For the cost of one part-time assistant, get a full AI team that works 24/7.
              </p>
              <div className="pt-6">
                <div className="text-5xl font-bold mb-2">$499<span className="text-2xl text-muted-foreground">/month</span></div>
                <div className="text-muted-foreground mb-8">Everything included. No per-message fees.</div>
                <Button size="lg" className="text-lg px-12">
                  Start Free 14-Day Trial
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to scale your service business?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join service companies who are serving more clients with less stress. Set up your AI team in 10 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-12">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-2xl font-bold">Ergoly</div>
              <div className="text-sm text-muted-foreground">
                The operating system for service businesses
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-primary transition-colors">About</a>
                <a href="#" className="hover:text-primary transition-colors">Pricing</a>
                <a href="#" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
