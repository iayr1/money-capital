"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-teal-500"></div>
            <span className="font-bold text-xl">Money Capital</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/algotrading" className="text-sm font-medium hover:underline underline-offset-4">
            AlgoTrading
          </Link>
          <Link href="/loans" className="text-sm font-medium hover:underline underline-offset-4">
            Personal Loans
          </Link>
          <Link href="/insurance" className="text-sm font-medium hover:underline underline-offset-4">
            Insurance
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-6">
              <Link
                href="/algotrading"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                AlgoTrading
              </Link>
              <Link
                href="/loans"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Personal Loans
              </Link>
              <Link
                href="/insurance"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Insurance
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Log In
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
