import type { ReactNode } from 'react'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const BEATS = [
  { id: 'sorteren', n: '1', label: 'Sorteren', accent: 'beat-1' },
  { id: 'uit-elkaar', n: '2', label: 'Uit elkaar', accent: 'beat-2' },
  { id: 'rollen', n: '3', label: 'Rollen', accent: 'beat-3' },
  { id: 'cross-lap', n: '4', label: 'Cross-lap / vilten', accent: 'beat-4' },
  { id: 'proef', n: '5', label: 'Proef-eindproducten', accent: 'beat-5' },
] as const

const ACCENT_BORDER: Record<(typeof BEATS)[number]['accent'], string> = {
  'beat-1': 'border-l-beat-1',
  'beat-2': 'border-l-beat-2',
  'beat-3': 'border-l-beat-3',
  'beat-4': 'border-l-beat-4',
  'beat-5': 'border-l-beat-5',
}

const ACCENT_TEXT: Record<(typeof BEATS)[number]['accent'], string> = {
  'beat-1': 'text-beat-1',
  'beat-2': 'text-beat-2',
  'beat-3': 'text-beat-3',
  'beat-4': 'text-beat-4',
  'beat-5': 'text-beat-5',
}

const ACCENT_CHIP: Record<(typeof BEATS)[number]['accent'], string> = {
  'beat-1': 'bg-beat-1/10 text-beat-1',
  'beat-2': 'bg-beat-2/10 text-beat-2',
  'beat-3': 'bg-beat-3/10 text-beat-3',
  'beat-4': 'bg-beat-4/10 text-beat-4',
  'beat-5': 'bg-beat-5/10 text-beat-5',
}

function PlaceholderMedia({ beat }: { beat: string }) {
  return (
    <div
      className="relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-[12px] border border-dashed border-line bg-paper-soft px-6 py-14"
      role="img"
      aria-label={`Media volgt — ${beat} (F-73)`}
    >
      <div className="relative text-center">
        <p className="text-lg font-bold text-ink">media volgt</p>
        <p className="mt-1 text-xs font-bold tracking-[0.18em] text-terracotta uppercase">
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
  accent,
  children,
}: {
  id: string
  n: string
  title: string
  accent: (typeof BEATS)[number]['accent']
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-5 sm:px-5 md:py-6">
      <div
        className={`surface-card animate-fade-up border-l-[5px] px-5 py-7 sm:px-7 sm:py-8 md:px-8 ${ACCENT_BORDER[accent]}`}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          <span
            className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-xs font-bold ${ACCENT_CHIP[accent]}`}
          >
            {n}
          </span>
          <p
            className={`text-[11px] font-bold tracking-[0.2em] uppercase ${ACCENT_TEXT[accent]}`}
          >
            Beat {n}
          </p>
        </div>
        <h2 className="text-[1.65rem] font-extrabold leading-tight text-ink md:text-3xl">
          {title}
        </h2>
        <div className="mt-5 space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
          {children}
        </div>
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
    <figure className="overflow-hidden">
      <div className="overflow-hidden rounded-[12px] bg-chip">
        <img
          src={src}
          alt={alt}
          className="h-auto w-full object-cover animate-reveal"
          loading="lazy"
        />
      </div>
      {caption ? (
        <figcaption className="px-0.5 pt-3 text-sm leading-snug text-ink-faint">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-ink">
      {/* 1 — HERO */}
      <header className="relative px-4 pb-10 pt-8 sm:px-5 md:pb-14 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <p className="animate-fade-up text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
            Boldwool
          </p>
          <h1
            className="mt-4 max-w-3xl animate-fade-up text-xl font-bold leading-snug text-ink md:text-3xl"
            style={{ animationDelay: '90ms' }}
          >
            Fibre Fidelity — preserve before you recycle.
          </h1>
          <p
            className="mt-4 max-w-xl animate-fade-up text-base leading-relaxed text-ink-muted md:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            Behoud vóór je recycleert. Bestaande lijnen, geen nieuwe fabriek. Enthusiasts &amp;
            makers eerst.
          </p>
          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href="#keten"
              className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-bold text-white transition hover:bg-forest-deep"
            >
              Bekijk de keten
            </a>
            <a
              href="#cta"
              className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-forest hover:text-forest"
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
        className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-5 md:justify-center md:gap-2.5 [&::-webkit-scrollbar]:hidden">
          {BEATS.map((b, i) => (
            <a
              key={b.id}
              href={`#${b.id}`}
              className="group animate-chip-in shrink-0 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink transition hover:border-forest hover:bg-forest hover:text-white"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className={`mr-1.5 font-bold ${ACCENT_TEXT[b.accent]} group-hover:text-white`}>
                {b.n}
              </span>
              {b.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Ladder claim */}
      <div className="px-4 py-5 sm:px-5 md:py-6">
        <div className="surface-card mx-auto max-w-3xl px-5 py-5 text-center sm:px-7">
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            <span className="font-semibold text-ink">Industrial felt fabric</span> (Havivank)
            <span className="mx-2 text-terracotta">→</span>
            <span className="font-semibold text-ink">artisan proef-eindproducten</span>
            <span className="mx-2 text-terracotta">→</span>
            open vraag: follow-up processability
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl pb-4">
        {/* 3 — Beat 1 */}
        <BeatSection id="sorteren" n="01" title="Sorteren" accent="beat-1">
          <p>Textiel houden als textiel, niet meteen tot vezel.</p>
          <PlaceholderMedia beat="Sorteren" />
        </BeatSection>

        {/* 4 — Beat 2 */}
        <BeatSection id="uit-elkaar" n="02" title="Uit elkaar" accent="beat-2">
          <p>Panelen/kleding openen zonder de structuur te vernietigen.</p>
          <PlaceholderMedia beat="Uit elkaar" />
        </BeatSection>

        {/* 5 — Beat 3 */}
        <BeatSection id="rollen" n="03" title="Rollen" accent="beat-3">
          <p>Materiaal op kartonroller, klaar voor bestaande lijnen.</p>
          <PlaceholderMedia beat="Rollen" />
        </BeatSection>

        {/* 6 — Beat 4 */}
        <BeatSection id="cross-lap" n="04" title="Cross-lap / vilten" accent="beat-4">
          <p>
            Op standaard naaldviltlijnen: hybride felt fabric — Havivank POC. Geen nieuwe fabriek;
            bestaande industriële lijnen.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
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
        <BeatSection id="proef" n="05" title="Proef-eindproducten" accent="beat-5">
          <p>
            Artisan schoenen en bodywarmers als proef. De stof is industrieel (Havivank); de
            eindproducten zijn artisan trials — geen factory SKUs. Makers welkom als partners.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
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

          <div className="grid gap-6 md:grid-cols-2">
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
      </div>

      {/* 8 — CTA */}
      <section id="cta" className="scroll-mt-28 px-4 py-6 sm:px-5 md:py-8">
        <div className="mx-auto max-w-3xl animate-fade-up rounded-card bg-forest px-6 py-10 text-center text-white sm:px-10 sm:py-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">Praat mee</h2>
          <p className="mt-2 text-xl font-bold text-white/90 md:text-2xl">
            Word maker-partner
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Open uitnodiging voor enthusiasts en makers. Geen subsidieportaal — een gesprek over de
            keten, de stof, en wat jij ermee wilt maken.
          </p>
          <a
            href="mailto:lennart@boldwool.com?subject=Boldwool%20keten%20%2F%20maker-partner"
            className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-forest transition hover:bg-paper"
          >
            Stuur een seintje
          </a>
        </div>
      </section>

      {/* 9 — FOOTER */}
      <footer className="px-4 py-10 sm:px-5">
        <div className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-ink-faint">
          <p className="text-base font-bold text-ink">Boldwool · Fibre Fidelity</p>
          <p className="mt-2">
            Conversation draft — niet voor portal-indiening. Geen CapEx / nieuwe fabriek-claims op
            deze pagina.
          </p>
          <p className="mt-4">
            <a
              href="https://boldwool.com"
              className="font-semibold text-ink underline-offset-2 hover:text-terracotta hover:underline"
            >
              boldwool.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
