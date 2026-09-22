import type { ReactNode } from 'react'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const BEATS = [
  { id: 'sorteren', n: '1', label: 'Sorteren' },
  { id: 'uit-elkaar', n: '2', label: 'Uit elkaar' },
  { id: 'rollen', n: '3', label: 'Rollen' },
  { id: 'cross-lap', n: '4', label: 'Cross-lap / vilten' },
  { id: 'proef', n: '5', label: 'Proef-eindproducten' },
] as const

function PlaceholderMedia({ beat }: { beat: string }) {
  return (
    <div
      className="relative flex min-h-[220px] items-center justify-center overflow-hidden border border-dashed border-amber-700/35 bg-stone-100 px-6 py-16"
      role="img"
      aria-label={`Media volgt — ${beat} (F-73)`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-12deg, transparent, transparent 12px, rgba(217,119,6,0.05) 12px, rgba(217,119,6,0.05) 13px)',
        }}
      />
      <div className="relative text-center">
        <p className="font-display text-xl font-bold text-stone-700">media volgt</p>
        <p className="mt-1 text-sm font-bold tracking-widest text-amber-700 uppercase">
          F-73 · {beat}
        </p>
      </div>
    </div>
  )
}

function BeatSection({
  id,
  n,
  title,
  children,
  tone = 'paper',
}: {
  id: string
  n: string
  title: string
  children: ReactNode
  tone?: 'paper' | 'stone' | 'white'
}) {
  const bg =
    tone === 'stone' ? 'bg-stone-100/80' : tone === 'white' ? 'bg-white/80' : 'bg-transparent'

  return (
    <section id={id} className={`scroll-mt-24 py-16 px-5 md:py-20 ${bg}`}>
      <div className="mx-auto max-w-3xl animate-fade-up">
        <p className="mb-2 text-sm font-bold tracking-[0.2em] text-amber-700 uppercase">
          Beat {n}
        </p>
        <h2 className="font-display text-3xl font-extrabold leading-tight text-stone-900 md:text-4xl">
          {title}
        </h2>
        <div className="mt-6 space-y-6 text-lg leading-relaxed text-stone-700">{children}</div>
      </div>
    </section>
  )
}

function Photo({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="overflow-hidden bg-stone-100">
      <img
        src={src}
        alt={alt}
        className="h-auto w-full object-cover animate-reveal"
        loading="lazy"
      />
      {caption ? (
        <figcaption className="px-1 pt-3 text-sm leading-snug text-stone-600">{caption}</figcaption>
      ) : null}
    </figure>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen text-stone-800">
      {/* 1 — HERO */}
      <header className="hero-grain relative min-h-[100svh] overflow-hidden text-stone-100">
        <div className="relative mx-auto flex min-h-[100svh] max-w-4xl flex-col justify-end px-5 pb-16 pt-24 md:justify-center md:pb-24 md:pt-20">
          <p
            className="animate-fade-up font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Boldwool
          </p>
          <h1
            className="mt-5 max-w-3xl animate-fade-up font-display text-2xl font-bold leading-snug text-amber-400 md:text-4xl"
            style={{ animationDelay: '90ms' }}
          >
            Fibre Fidelity — preserve before you recycle.
          </h1>
          <p
            className="mt-5 max-w-lg animate-fade-up text-lg text-stone-300 md:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            Behoud vóór je recycleert. Bestaande lijnen, geen nieuwe fabriek. Enthusiasts &amp;
            makers eerst.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href="#keten"
              className="inline-flex items-center bg-amber-500 px-6 py-3 text-base font-bold text-stone-900 transition hover:bg-amber-400"
            >
              Bekijk de keten
            </a>
            <a
              href="#cta"
              className="inline-flex items-center border border-stone-400/60 px-6 py-3 text-base font-semibold text-stone-100 transition hover:border-amber-300 hover:text-amber-200"
            >
              Praat mee
            </a>
          </div>
        </div>
      </header>

      {/* 2 — KETEN OVERVIEW STRIP */}
      <nav
        id="keten"
        aria-label="Keten overzicht"
        className="sticky top-0 z-30 border-b border-stone-200 bg-stone-50/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-3 md:justify-center md:gap-3 md:px-5">
          {BEATS.map((b, i) => (
            <a
              key={b.id}
              href={`#${b.id}`}
              className="animate-chip-in shrink-0 border border-stone-300 bg-white px-3.5 py-2 text-sm font-semibold text-stone-800 transition hover:border-amber-600 hover:text-amber-800"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="mr-1.5 text-amber-700">{b.n}</span>
              {b.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Ladder claim */}
      <div className="border-b border-stone-200 bg-white/70 px-5 py-6">
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-stone-700 md:text-lg">
          <span className="font-semibold text-stone-900">Industrial felt fabric</span> (Havivank)
          <span className="mx-2 text-amber-700">→</span>
          <span className="font-semibold text-stone-900">artisan proef-eindproducten</span>
          <span className="mx-2 text-amber-700">→</span>
          open vraag: follow-up processability
        </p>
      </div>

      {/* 3 — Beat 1 */}
      <BeatSection id="sorteren" n="01" title="Sorteren" tone="white">
        <p>Textiel houden als textiel, niet meteen tot vezel.</p>
        <PlaceholderMedia beat="Sorteren" />
      </BeatSection>

      {/* 4 — Beat 2 */}
      <BeatSection id="uit-elkaar" n="02" title="Uit elkaar" tone="stone">
        <p>Panelen/kleding openen zonder de structuur te vernietigen.</p>
        <PlaceholderMedia beat="Uit elkaar" />
      </BeatSection>

      {/* 5 — Beat 3 */}
      <BeatSection id="rollen" n="03" title="Rollen" tone="white">
        <p>Materiaal op kartonroller, klaar voor bestaande lijnen.</p>
        <PlaceholderMedia beat="Rollen" />
      </BeatSection>

      {/* 6 — Beat 4 */}
      <BeatSection id="cross-lap" n="04" title="Cross-lap / vilten" tone="stone">
        <p>
          Op standaard naaldviltlijnen: hybride felt fabric — Havivank POC. Geen nieuwe fabriek;
          bestaande industriële lijnen.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <Photo
            src={asset('images/crosslap/Start.jpg')}
            alt="Start: denim en textiel klaargelegd voor cross-lap / vilten"
            caption="Start — textiel als textiel, klaar voor de lijn."
          />
          <Photo
            src={asset('images/crosslap/End-result.jpg')}
            alt="Eindresultaat: rollen industriële felt fabric van Havivank"
            caption="Eindresultaat — industriële felt fabric (Havivank POC)."
          />
        </div>
      </BeatSection>

      {/* 7 — Beat 5 */}
      <BeatSection id="proef" n="05" title="Proef-eindproducten" tone="white">
        <p>
          Artisan schoenen en bodywarmers als proef. De stof is industrieel (Havivank); de
          eindproducten zijn artisan trials — geen factory SKUs. Makers welkom als partners.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <Photo
            src={asset('images/endproducts/sneaker_IMG_9494.jpeg')}
            alt="Drie artisan proef-sneakers van felt fabric"
            caption="Artisan trial sneakers — niet massaproductie."
          />
          <Photo
            src={asset('images/endproducts/sneaker_IMG_9495.jpeg')}
            alt="Paar artisan proef-sneakers, detail van felt en cork zool"
            caption="Zelfde ladder: industriële felt → maker-proef."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Photo
            src={asset('images/endproducts/BoldWool_web.jpg')}
            alt="Artisan bodywarmer en jas in het veld"
            caption="Proef-eindproducten — bodywarmer &amp; jas."
          />
          <Photo
            src={asset('images/endproducts/BoldWool_web-2.jpg')}
            alt="Artisan felt garments gedragen in landschap"
            caption="Makers welkom als partners."
          />
        </div>
      </BeatSection>

      {/* 8 — CTA */}
      <section id="cta" className="scroll-mt-24 bg-stone-900 px-5 py-20 text-stone-100 md:py-24">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">Praat mee</h2>
          <p className="mt-3 font-display text-2xl font-bold text-amber-400 md:text-3xl">
            Word maker-partner
          </p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
            Open uitnodiging voor enthusiasts en makers. Geen subsidieportaal — een gesprek over de
            keten, de stof, en wat jij ermee wilt maken.
          </p>
          <a
            href="mailto:lennart@boldwool.com?subject=Boldwool%20keten%20%2F%20maker-partner"
            className="mt-10 inline-flex bg-amber-500 px-8 py-3.5 text-base font-bold text-stone-900 transition hover:bg-amber-400"
          >
            Stuur een seintje
          </a>
        </div>
      </section>

      {/* 9 — FOOTER */}
      <footer className="border-t border-stone-200 bg-stone-50 px-5 py-10">
        <div className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-stone-600">
          <p className="font-display text-base font-bold text-stone-900">Boldwool · Fibre Fidelity</p>
          <p className="mt-2">
            Conversation draft — niet voor portal-indiening. Geen CapEx / nieuwe fabriek-claims op
            deze pagina.
          </p>
          <p className="mt-4">
            <a
              href="https://boldwool.com"
              className="font-semibold text-amber-800 underline-offset-2 hover:underline"
            >
              boldwool.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
