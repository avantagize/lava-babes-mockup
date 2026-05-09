import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import pinup from "@/assets/pinup.png";
import drink1 from "@/assets/drink1.jpg";
import drink2 from "@/assets/drink2.jpg";
import drink3 from "@/assets/drink3.jpg";
import drink4 from "@/assets/drink4.jpg";
import storefront from "@/assets/storefront.jpg";
import map from "@/assets/map.png";
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
  { name: "Kilauea Kick Kona", desc: "Bold, smoky, erupting with Kona depth.", img: drink1 },
  { name: "Molten Mocha", desc: "Velvety chocolate lava swirled in espresso.", img: drink2 },
  { name: "The Lava Flow Cold Brew", desc: "Iced Kona with a slow river of red syrup.", img: drink3 },
  { name: "Surfer's Sunrise Blend", desc: "Layered latte that tastes like a Waikiki dawn.", img: drink4 },
];

function Header() {
  return (
    <header className="bg-[var(--teal-deep)] text-[var(--color-accent)] relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <p className="font-script text-sm md:text-lg text-[var(--color-ember)] hidden sm:block">
          Experience the heat. Brewed in Honolulu.
        </p>
        <img src={logo} alt="Lava Babes Coffee" className="h-20 md:h-28 w-auto absolute left-1/2 -translate-x-1/2 top-2 drop-shadow-2xl" width={1024} height={1024} />
        <nav className="ml-auto flex items-center gap-4 md:gap-8 font-serif-retro text-base md:text-xl text-[var(--color-ember)]">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      <div className="relative max-w-5xl mx-auto px-6 pt-28 md:pt-40 pb-24 md:pb-32 text-center">
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-lava-gradient leading-none">
          Lava Babes Coffee.
        </h1>
        <h2 className="font-display tracking-wide text-xl md:text-3xl mt-6 text-[var(--color-sand)] uppercase drop-shadow-lg">
          Honolulu's Best-Kept Secret Is Out.
        </h2>
        <p className="mt-6 text-base md:text-lg text-[var(--color-sand)]/95 max-w-2xl mx-auto drop-shadow-md">
          We serve more than just coffee; we serve a feeling. Retro vibes, tropical energy,
          and the best Kona coffee on the island.
        </p>
        <a href="#menu" className="btn-lava inline-block mt-10 px-10 py-5 rounded-full font-display text-lg md:text-xl uppercase tracking-wider">
          See Our Hottest Brews
        </a>
      </div>
      <div className="lava-divider" />
    </section>
  );
}

function HotterSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-lava-gradient rounded-full blur-3xl opacity-30" />
          <img src={pinup} alt="Lava Babes hostess" className="relative w-full max-w-md mx-auto drop-shadow-2xl" width={768} height={1024} loading="lazy" />
        </div>
        <div>
          <h2 className="font-script text-5xl md:text-6xl text-[var(--color-ember)] mb-6">Hotter than Kilauea.</h2>
          <p className="text-lg leading-relaxed text-[var(--color-muted-foreground)] mb-4">
            We serve only the freshest, locally-sourced Kona and Ka'u beans, roasted to perfection
            in small batches by hands that know the islands.
          </p>
          <p className="text-lg leading-relaxed text-[var(--color-muted-foreground)] mb-8">
            A unique experience built on retro aesthetics, salt-air passion, and pure volcanic energy.
            Every cup is an eruption of flavor.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Surf Culture", icon: <Waves className="w-6 h-6" /> },
              { label: "Kona Plantation", icon: <Mountain className="w-6 h-6" /> },
              { label: "Hand-Roasted", icon: <Mountain className="w-6 h-6" /> },
              { label: "Single Origin", icon: <Waves className="w-6 h-6" /> },
            ].map((f) => (
              <div key={f.label} className="bg-card border border-border rounded-xl p-4 flex items-center gap-3 text-[var(--color-ember)]">
                {f.icon}
                <span className="font-serif-retro text-base text-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlavorsSection() {
  return (
    <section id="menu" className="py-20 md:py-28 px-6 bg-[var(--teal-deep)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-script text-5xl md:text-6xl text-[var(--color-ember)]">Explosive Flavors.</h2>
          <p className="text-[var(--color-muted-foreground)] mt-3 max-w-xl mx-auto">Four signature brews, each one a tiny eruption.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {drinks.map((d) => (
            <article key={d.name} className="bg-card border border-border rounded-2xl p-5 text-center shadow-deep hover:-translate-y-2 transition-transform">
              <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-sand">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover" width={512} height={512} loading="lazy" />
              </div>
              <h3 className="font-display text-lg text-[var(--color-ember)] uppercase tracking-wide">{d.name}</h3>
              <p className="text-sm text-[var(--color-muted-foreground)] mt-2">{d.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-script text-5xl md:text-6xl text-[var(--color-ember)] text-center mb-4">Find Your Nearest Hotspot.</h2>
        <p className="text-center text-[var(--color-muted-foreground)] max-w-xl mx-auto mb-12">
          Our shop is in the heart of Honolulu — a stone's throw from Waikiki Beach. You can't miss it.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={map} alt="Map of Oahu with shop pin" className="w-full max-w-md mx-auto drop-shadow-2xl" width={1024} height={1024} loading="lazy" />
          <img src={storefront} alt="Lava Babes storefront" className="w-full rounded-2xl shadow-deep border-2 border-[var(--color-ember)]/30" width={1024} height={1024} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[var(--teal-deep)] border-t-4 border-[var(--lava)]">
      <div className="lava-divider rotate-180" />
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
        <img src={logo} alt="Lava Babes" className="h-32 w-auto mx-auto md:mx-0" width={1024} height={1024} loading="lazy" />
        <div className="text-center md:text-left">
          <p className="text-[var(--color-muted-foreground)] text-sm">For questions, feedback, or collaborations:</p>
          <a href="mailto:stanley@lavababescoffee.com" className="font-serif-retro text-xl text-[var(--color-ember)] hover:text-[var(--color-sand)]">
            stanley@lavababescoffee.com
          </a>
          <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">27th Monoluli St, Honolulu, Hawaii</p>
        </div>
        <div className="flex justify-center md:justify-end gap-4 text-[var(--color-ember)]">
          {[Instagram, Facebook, Mountain, Waves].map((Icon, i) => (
            <a key={i} href="#" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-lava-gradient hover:text-primary-foreground transition">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-[var(--color-muted-foreground)] py-4 border-t border-border">
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
      <HotterSection />
      <FlavorsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
