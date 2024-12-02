"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToHowToBuy = () => {
    const howToBuySection = document.getElementById('how-to-buy')
    if (howToBuySection) {
      howToBuySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent" />
        <div className="absolute inset-0 bg-[url('/logo.svg')] bg-cover bg-center opacity-10" />
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative">
        <div className="text-white space-y-6">
          <p className="text-[#46eac8]">
            — Embrace the Power of BlockDAG Technology
          </p>
          <h1 className="text-5xl md:text-7xl font-bold">
            $JADE Future
            <br />
            <span className="text-[#46eac8]">OF Kaspa</span>
          </h1>
          <p className="text-gray-400">
            Jade Fair launched 0 premine, no team or VC allocation.
            <br />
            Marketspace: 15 ONGOING TICKER: JADE
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="border-[#46eac8] text-[#46eac8] hover:bg-[#46eac8]/10"
            >
              Whitepaper
            </Button>
            <Button 
              className="bg-[#46eac8] hover:bg-[#46eac8]/80 text-[#1A1A1A] font-bold"
              onClick={scrollToHowToBuy}
            >
              Buy Token
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[400px] h-[400px] animate-pulse">
            <Image
              src="/logo.svg"
              alt="Jade Dragon"
              width={400}
              height={400}
              className="w-full max-w-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#46eac8]/20 to-transparent rounded-full animate-spin-slow" />
          </div>
        </div>
      </div>
    </section>
  )
}

