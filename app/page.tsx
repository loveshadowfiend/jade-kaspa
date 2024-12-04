"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  Wallet,
  CreditCard,
  Search,
  DollarSign,
  MessageSquare,
  Twitter,
} from "lucide-react";
import { useRef } from "react";
import { AuroraBackground } from "@/components/aurora-background";

export default function Home() {
  const refContentBuy = useRef<HTMLElement>(null);
  const refContentTokenomic = useRef<HTMLElement>(null);
  const refContentAbout = useRef<HTMLElement>(null);
  const refContentContact = useRef<HTMLElement>(null);
  const refContentHome = useRef<HTMLElement>(null);
  const refContentRoadMap = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Navigation */}
      <nav className="flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur fixed w-full z-50 border-b border-[#46eac8]/10 h-[50px]">
        <div className="flex items-center gap-6 text-[#46eac8]">
          <a
            style={{ cursor: "pointer" }}
            onClick={() =>
              refContentHome.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() =>
              refContentAbout.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() =>
              refContentRoadMap.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors"
          >
            Roadmap
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() =>
              refContentContact.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={refContentHome}
        className="flex items-center justify-center"
      >
        <AuroraBackground className="items-center relative">
          <div className="text-white space-y-6">
            <p className="text-[#46eac8] text-center">
              Embrace the Meme of BlockDAG Technology
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-center">
              $JADE
              <br />
              <span className="text-[#46eac8]">Serpent Dragon of Kaspa</span>
            </h1>
            <p className="text-gray-400 text-center">
              Join our community right now!
              <br />
              The first serpent dragon on KRC20
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="border-[#46eac8] text-[#46eac8] hover:bg-[#46eac8]/10 relative"
                onClick={() =>
                  refContentContact.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Socials
              </Button>
              <Button
                className="bg-[#46eac8] hover:bg-[#46eac8]/80 text-[#1A1A1A] font-bold relative"
                onClick={() =>
                  refContentBuy.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                How to buy
              </Button>
            </div>
          </div>
        </AuroraBackground>
      </section>
      <section
        ref={refContentAbout}
        id="about"
        className="py-20 px-4 bg-[#2A2A2A]"
      >
        <div className="mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/cute.png"
                  alt="Jade Dragon Symbol"
                  width={400}
                  height={400}
                  className="w-full max-w-[400px] relative z-10"
                />
              </div>
            </div>
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold text-[#46eac8] text-center">
                About Our Jade token
              </h2>
              <h3 className="text-4xl font-bold text-center">
                Jade is Changing the Game!
              </h3>
              <ul className="flex flex-col items-center space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  Jade is an nephritis dragon, that symbolize wealth and
                  determination.
                </li>
                <li className="flex items-center gap-2">
                  We&apos;re sure, that right mascot and naming are one of key
                  to success.
                </li>
              </ul>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="border-[#46eac8] text-[#46eac8] hover:bg-[#46eac8]/10"
                  onClick={() =>
                    refContentTokenomic.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tokenomics Section */}
      <section ref={refContentTokenomic} className="py-20 px-4 bg-[#1A1A1A]">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-[#46eac8] mb-2">
            Fair Launch
          </h2>
          <h3 className="text-4xl font-bold text-white">Tokenomics </h3>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <Card className="bg-[#1A1A1A] border-[#46eac8]/20 p-6 group hover:border-[#46eac8] transition-colors">
            <div className="text-[#46eac8] font-bold mb-2 text-[24px] text-center md:text-[40px]">
              25 900
            </div>
            <h4 className="text-white text-xl font-bold mb-4 text-center">
              Per Mint
            </h4>
          </Card>
          <Card className="bg-[#1A1A1A] border-[#46eac8]/20 p-6 group hover:border-[#46eac8] transition-colors">
            <div className="text-[#46eac8] font-bold mb-2 text-center text-[24px] md:text-[40px]">
              800M
            </div>
            <h4 className="text-white text-xl font-bold mb-4 text-center">
              Total Supply
            </h4>
          </Card>
          <Card className="bg-[#1A1A1A] border-[#46eac8]/20 p-6 group hover:border-[#46eac8] transition-colors">
            <div className="text-[#46eac8] font-bold mb-2 text-[24px] text-center md:text-[40px]">
              0%
            </div>
            <h4 className="text-white text-xl font-bold mb-4 text-center">
              Pre-minted
            </h4>
          </Card>
        </div>
      </section>

      {/* How To Buy Section */}
      <section ref={refContentBuy} className="py-20 px-4 bg-[#2A2A2A]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#46eac8] mb-2">
              How To Start
            </h2>
            <h3 className="text-4xl font-bold text-white">
              How To Buy JADE Tokens
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Access KSPR Bot",
                description: (
                  <>
                    Open your telegram and navigate to the{" "}
                    <a
                      href="https://t.me/kspr_home_bot?start=YPwobQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#46eac8] hover:underline"
                    >
                      KSPR bot
                    </a>
                    .
                  </>
                ),
                icon: MessageCircle,
              },
              {
                step: 2,
                title: "Create or Import Wallet",
                description:
                  "Set up a new private wallet or import an existing one to the KSPR bot.",
                icon: Wallet,
              },
              {
                step: 3,
                title: "Fund Your Wallet",
                description:
                  "Add funds to your wallet to prepare for purchasing JADE tokens.",
                icon: CreditCard,
              },
              {
                step: 4,
                title: "Open Marketplace",
                description:
                  "In the KSPR bot, type and send the command '/marketplace' to access the token marketplace.",
                icon: Search,
              },
              {
                step: 5,
                title: "Find JADE Token",
                description:
                  "Type and send 'jade' to search for JADE token listings in the marketplace.",
                icon: Search,
              },
              {
                step: 6,
                title: "Purchase Tokens",
                description:
                  "Choose a suitable order based on your preferred price and complete the purchase of JADE tokens.",
                icon: DollarSign,
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="bg-[#1A1A1A] border-[#46eac8]/20 p-6 group hover:border-[#46eac8] transition-colors"
              >
                <div className="relative mb-4">
                  <item.icon className="w-12 h-12 text-[#46eac8]" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#46eac8] rounded-full flex items-center justify-center text-[#1A1A1A] font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <div className="text-white">
                  <h4 className="font-bold mb-2 text-[#46eac8]">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section ref={refContentRoadMap} id="roadmap" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#46eac8] mb-2">
              Our Journey
            </h2>
            <h3 className="text-4xl font-bold text-white">Jade Roadmap</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                quarter: "Phase 1",
                title: "Launch",
                items: [
                  "Sell 100% Jade tokens",
                  "Establish community",
                  "Shilling in KSPR chats",
                ],
              },
              {
                quarter: "Phase 2",
                title: "Growth",
                items: [
                  "Listing on DEX and CEX",
                  "Marketing campaigns",
                  "Collabs",
                ],
              },
              {
                quarter: "Phase 3",
                title: "Development",
                items: [
                  "Creating unique NFTs for holders of Jade",
                  "Starting development of DApp for minting from various wallets",
                ],
              },
              {
                quarter: "Phase 4",
                title: "Scaling",
                items: ["More collabs and listings"],
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className="bg-[#1A1A1A] border-[#46eac8]/20 p-6 group hover:border-[#46eac8] transition-colors"
              >
                <div className="text-[#46eac8] font-bold mb-2">
                  {phase.quarter}
                </div>
                <h4 className="text-white text-xl font-bold mb-4">
                  {phase.title}
                </h4>
                <ul className="text-gray-400 space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#46eac8] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        ref={refContentContact}
        id="contact"
        className="py-20 px-4 bg-[#2A2A2A]"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#46eac8] mb-2">
              Connect With Us
            </h2>
            <h3 className="text-4xl font-bold text-white">
              Join Our Community
            </h3>
          </div>
          <div className="flex justify-center gap-8">
            <a
              href="https://t.me/+BkO_jvbpDiBmODMy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] rounded-lg border border-[#46eac8]/20 hover:border-[#46eac8] transition-colors group"
            >
              <MessageSquare className="w-6 h-6 text-[#46eac8]" />
              <span className="text-white group-hover:text-[#46eac8] transition-colors">
                Telegram
              </span>
            </a>
            <a
              href="https://x.com/JadeKRC20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] rounded-lg border border-[#46eac8]/20 hover:border-[#46eac8] transition-colors group"
            >
              <Twitter className="w-6 h-6 text-[#46eac8]" />
              <span className="text-white group-hover:text-[#46eac8] transition-colors">
                Twitter
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
