import Link from "next/link"
import { ArrowRight, BarChart3, CreditCard, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/30 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Smart Financial Solutions for the Digital Age
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Money Capital combines cutting-edge technology with financial expertise to help you grow and protect
                your wealth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-teal-500" />
                <span className="text-sm">AlgoTrading</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-teal-500" />
                <span className="text-sm">Personal Loans</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-500" />
                <span className="text-sm">Insurance</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
              <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-2 p-6 text-center text-white">
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Market Performance</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span>S&P 500</span>
                        <div className="flex items-center text-green-300">
                          <span>+1.2%</span>
                          <ArrowRight className="ml-1 h-3 w-3 rotate-45" />
                        </div>
                      </div>
                      <div className="h-1 w-full rounded-full bg-white/20">
                        <div className="h-1 w-[65%] rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span>NASDAQ</span>
                        <div className="flex items-center text-green-300">
                          <span>+0.8%</span>
                          <ArrowRight className="ml-1 h-3 w-3 rotate-45" />
                        </div>
                      </div>
                      <div className="h-1 w-full rounded-full bg-white/20">
                        <div className="h-1 w-[45%] rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span>DOW</span>
                        <div className="flex items-center text-red-300">
                          <span>-0.3%</span>
                          <ArrowRight className="ml-1 h-3 w-3 -rotate-45" />
                        </div>
                      </div>
                      <div className="h-1 w-full rounded-full bg-white/20">
                        <div className="h-1 w-[30%] rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-[250px] w-[250px] rounded-lg bg-gradient-to-br from-teal-600 to-teal-800 shadow-xl md:h-[300px] md:w-[300px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-2 p-6 text-center text-white">
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Loan Calculator</h3>
                    <div className="space-y-3">
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Amount</span>
                          <span>$10,000</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-white/20">
                          <div className="h-1 w-[60%] rounded-full bg-white"></div>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Term</span>
                          <span>36 months</span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-white/20">
                          <div className="h-1 w-[50%] rounded-full bg-white"></div>
                        </div>
                      </div>
                      <div className="rounded-md bg-white/10 p-2">
                        <div className="text-xs">Monthly Payment</div>
                        <div className="text-lg font-bold">$320.15</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
