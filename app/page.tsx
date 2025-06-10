import { ArrowRight, BarChart3, CreditCard, Lock, Shield, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Products Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl">
              Our Financial Solutions
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Discover how Money Capital can help you achieve your financial goals with our innovative products
            </p>
          </div>

          <Tabs defaultValue="algotrading" className="mt-12 w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="algotrading">AlgoTrading</TabsTrigger>
              <TabsTrigger value="loans">Personal Loans</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
            </TabsList>
            <TabsContent value="algotrading" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-teal-500" />
                    Algorithmic Trading Platform
                  </CardTitle>
                  <CardDescription>Trade smarter with our AI-powered algorithmic trading solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="mt-1 h-5 w-5 text-teal-500" />
                      <div>
                        <h4 className="font-medium">Advanced Analytics</h4>
                        <p className="text-sm text-muted-foreground">
                          Real-time market data and predictive analytics to inform your trading decisions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock className="mt-1 h-5 w-5 text-teal-500" />
                      <div>
                        <h4 className="font-medium">Secure Trading</h4>
                        <p className="text-sm text-muted-foreground">
                          Bank-level security protocols to keep your investments safe
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=600"
                      alt="Trading dashboard preview"
                      className="rounded-lg border shadow-sm"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Start Trading
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="loans" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-teal-500" />
                    Personal Loan Solutions
                  </CardTitle>
                  <CardDescription>Flexible financing options tailored to your needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="mt-1 h-5 w-5 text-teal-500" />
                      <div>
                        <h4 className="font-medium">Competitive Rates</h4>
                        <p className="text-sm text-muted-foreground">
                          Industry-leading interest rates with flexible repayment terms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock className="mt-1 h-5 w-5 text-teal-500" />
                      <div>
                        <h4 className="font-medium">Quick Approval</h4>
                        <p className="text-sm text-muted-foreground">
                          Fast application process with decisions in minutes, not days
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="rounded-lg border bg-muted/50 p-6">
                      <h4 className="mb-4 text-center font-medium">Loan Calculator</h4>
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <label className="text-sm font-medium">Loan Amount</label>
                          <div className="flex items-center rounded-md border bg-background px-3">
                            <span className="text-sm text-muted-foreground">$</span>
                            <input
                              type="number"
                              placeholder="10,000"
                              className="w-full bg-transparent py-2 pl-1 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <label className="text-sm font-medium">Term (months)</label>
                          <input type="range" min="6" max="60" step="6" defaultValue="36" className="w-full" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>6 months</span>
                            <span>60 months</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="insurance" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-teal-500" />
                    Insurance Products
                  </CardTitle>
                  <CardDescription>Comprehensive coverage to protect what matters most</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-lg border p-4 text-center">
                      <Shield className="mx-auto mb-2 h-8 w-8 text-teal-500" />
                      <h4 className="font-medium">Life Insurance</h4>
                      <p className="mt-2 text-sm text-muted-foreground">Protect your family's financial future</p>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <Shield className="mx-auto mb-2 h-8 w-8 text-teal-500" />
                      <h4 className="font-medium">Health Insurance</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Quality healthcare coverage for you and your family
                      </p>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <Shield className="mx-auto mb-2 h-8 w-8 text-teal-500" />
                      <h4 className="font-medium">Investment Protection</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Safeguard your investments against market volatility
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Features Section */}
        <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl">
              Why Choose Money Capital
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We combine cutting-edge technology with financial expertise to deliver superior results
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <TrendingUp className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Data-Driven Decisions</h3>
              <p className="text-muted-foreground">
                Our AI algorithms analyze market trends to provide you with the most profitable opportunities.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <Lock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Bank-Level Security</h3>
              <p className="text-muted-foreground">
                Your data and investments are protected by enterprise-grade security protocols.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                <CreditCard className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Personalized Solutions</h3>
              <p className="text-muted-foreground">
                Tailored financial products that adapt to your unique needs and goals.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-12 md:py-24 lg:py-32">
          <h2 className="mb-12 text-center text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl">
            What Our Clients Say
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                    <CardDescription>AlgoTrading Client</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Money Capital's algorithmic trading platform has transformed my investment strategy. The returns have
                  been consistently impressive."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <CardTitle className="text-lg">Michael Chen</CardTitle>
                    <CardDescription>Personal Loan Customer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The loan application process was incredibly smooth. I received approval within hours and the funds
                  were in my account the next day."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted"></div>
                  <div>
                    <CardTitle className="text-lg">Emily Rodriguez</CardTitle>
                    <CardDescription>Insurance Client</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Their insurance products offer excellent coverage at competitive rates. The customer service team is
                  always helpful and responsive."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-24 lg:py-32 bg-teal-50 dark:bg-teal-950/30">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join thousands of satisfied clients who have achieved their financial goals with Money Capital
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
