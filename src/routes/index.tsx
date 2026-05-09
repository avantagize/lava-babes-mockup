import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import pinupCircle from "@/assets/pinup-circle.png";
import drink1 from "@/assets/drink1.png";
import drink2 from "@/assets/drink2.png";
import drink3 from "@/assets/drink3.png";
import drink4 from "@/assets/drink4.png";
import storefront from "@/assets/storefront.jpg";
import map from "@/assets/map.png";
import thumbSurf from "@/assets/thumb-surf.png";
import thumbBeach from "@/assets/thumb-beach.jpg";
import thumbBags from "@/assets/thumb-bags.png";
import thumbPlantation from "@/assets/thumb-plantation.jpg";
import { Instagram, Facebook, Mountain, Waves } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lava Babes Coffee — Honolulu's Hottest Kona Brew" },
      { name: "description", content: "Retro vibes, tropical energy, and the best Kona coffee on the island. Brewed in Honolulu." },
      { property: "og:title", content: "Lava Babes Coffee" },
      { property: "og:description", content: "Honolulu's best-kept secret is out. Volcanic flavor, retro soul." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Pacifico&family=Alfa+Slab+One&family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Home,
});

const drinks = [
  { name: "Kilauea Kick Kona", img: drink1 },
  { name: "Molten Mocha", img: drink2 },
  { name: "The Lava Flow Cold Brew", img: drink3 },
  { name: "Surfer's Sunrise Blend", img: drink4 },
];

const thumbs = [
  { src: thumbSurf, alt: "Branded surfboard" },
  { src: thumbBeach, alt: "Beach photo" },
  { src: thumbPlantation, alt: "Kona plantation" },
  { src: thumbBags, alt: "Coffee bean bags" },
];

function Header() {
  return (
    <header className="bg-[var(--teal-deep)] relative z-20">
      <div className="max-w-7xl mx-auto px-6 h-24 md:h-28 flex items-center justify-between gap-4 relative">
        <p className="font-script text-sm md:text-base lg:text-lg text-[var(--color-ember)] hidden sm:block flex-1">
          Experience the heat. Brewed in Honolulu.
        </p>
        <img src={logo} alt="Lava Babes Coffee" className="h-32 md:h-44 w-auto absolute left-1/2 -translate-x-1/2 top-2 drop-shadow-2xl" width={1024} height={1024} />
        <nav className="flex items-center gap-5 md:gap-9 font-serif-retro text-base md:text-xl text-[var(--color-ember)] flex-1 justify-end">
          <a href="#menu" className="hover:text-[var(--color-sand)] transition">Menu</a>
          <a href="#location" className="hover:text-[var(--color-sand)] transition">Location</a>
          <a href="#contact" className="hover:text-[var(--color-sand)] transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={hero} alt="Waikiki sunset" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="relative max-w-5xl mx-auto px-6 pt-20 md:pt-28 pb-20 md:pb-24 text-center">
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-lava-gradient leading-[0.9]">
          Lava Babes Coffee.
        </h1>
        <h2 className="font-display tracking-wide text-lg md:text-3xl mt-5 text-[var(--color-sand)] uppercase drop-shadow-lg">
          Honolulu's Best-Kept Secret Is Out.
        </h2>
        <p className="mt-5 text-base md:text-lg text-[var(--color-sand)]/95 max-w-2xl mx-auto drop-shadow-md">
          We serve more than just coffee; we serve a feeling.<br className="hidden md:block" />
          Retro vibes, tropical energy, and the best Kona coffee on the island.
        </p>
        <a href="#menu" className="btn-lava inline-block mt-9 px-10 py-5 rounded-full font-display text-base md:text-xl uppercase tracking-wider">
          See Our Hottest Brews.
        </a>
      </div>
      <div className="lava-divider" />
    </section>
  );
}

function MidSection() {
  return (
    <section className="py-16 md:py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Hotter than Kilauea */}
        <div>
          <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-start">
            <div className="relative w-44 sm:w-52 mx-auto sm:mx-0 shrink-0">
              <div className="absolute inset-0 rounded-full bg-lava-gradient blur-2xl opacity-50" />
              <img src={pinupCircle} alt="Lava Babes badge" className="relative rounded-full ring-4 ring-[var(--color-ember)]/60" width={1024} height={1024} loading="lazy" />
            </div>
            <div>
              <h2 className="font-script text-4xl md:text-5xl text-[var(--color-ember)] mb-4">Hotter than Kilauea.</h2>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-3">
                We serve only the freshest, locally-sourced Kona and Ka'u beans, roasted to perfection.
              </p>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                A unique experience built on retro aesthetics, salt-air passion, and pure volcanic energy — every cup is an eruption of flavor.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 md:gap-4 mt-8">
            {thumbs.map((t) => (
              <div key={t.alt} className="aspect-square rounded-xl overflow-hidden border-2 border-[var(--color-ember)]/40 bg-card shadow-deep">
                <img src={t.src} alt={t.alt} className="w-full h-full object-cover" width={512} height={512} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Explosive Flavors */}
        <div id="menu">
          <h2 className="font-script text-4xl md:text-5xl text-[var(--color-ember)] mb-6 text-center">Explosive Flavors.</h2>
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {drinks.map((d) => (
              <article key={d.name} className="bg-card border border-border rounded-2xl p-4 text-center shadow-deep hover:-translate-y-1 transition-transform">
                <div className="aspect-square mb-3 rounded-xl overflow-hidden bg-[var(--color-sand)]">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover" width={512} height={512} loading="lazy" />
                </div>
                <h3 className="font-display text-sm md:text-base text-[var(--color-ember)] uppercase tracking-wide">{d.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={map} alt="Map of Oahu with shop pin" className="w-full max-w-lg mx-auto drop-shadow-2xl" width={1024} height={1024} loading="lazy" />
        </div>
        <div>
          <h2 className="font-script text-4xl md:text-5xl text-[var(--color-ember)] mb-4">Find Your Nearest Hotspot.</h2>
          <p className="text-[var(--color-muted-foreground)] mb-6 max-w-md">
            Our shop is in the heart of Honolulu — a stone's throw from Waikiki Beach. We're easy to spot.
          </p>
          <img src={storefront} alt="Lava Babes storefront" className="w-full rounded-2xl shadow-deep border-2 border-[var(--color-ember)]/40" width={1024} height={1024} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[var(--teal-deep)] relative">
      <div className="lava-divider" style={{ transform: "rotate(180deg)" }} />
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
        <img src={logo} alt="Lava Babes" className="h-32 w-auto mx-auto md:mx-0" width={1024} height={1024} loading="lazy" />
        <div className="text-center md:text-left">
          <p className="text-[var(--color-muted-foreground)] text-sm mb-1">For questions, feedback, or collaborations, contact:</p>
          <a href="mailto:stanley@lavababescoffee.com" className="font-serif-retro text-xl md:text-2xl text-[var(--color-ember)] hover:text-[var(--color-sand)]">
            stanley@lavababescoffee.com
          </a>
          <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">Full Address, 27th Monoluli, Honolulu, Hawaii</p>
          <div className="flex gap-3 mt-4 justify-center md:justify-start text-[var(--color-ember)]">
            {[Instagram, Facebook, Mountain, Waves].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-lava-gradient hover:text-primary-foreground transition">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div />
      </div>
      <div className="text-center text-xs text-[var(--color-muted-foreground)] py-3 border-t border-border">
        © {new Date().getFullYear()} Lava Babes Coffee. Brewed with aloha.
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MidSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
