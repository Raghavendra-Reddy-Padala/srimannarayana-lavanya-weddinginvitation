import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import ganesha from "@/assets/ganesha.png";
import couple from "@/assets/couple.png";
import families from "@/assets/families.png";
import kalash from "@/assets/kalash.png";
import birds from "@/assets/birds.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "సాయి వంశి ❤ ఉదయ భాను — నిశ్చితార్థ ఆహ్వానం" },
      {
        name: "description",
        content:
          "గోలి సాయి వంశి రెడ్డి మరియు పాల ఉదయ భాను రెడ్డి నిశ్చితార్థ వేడుక — 21 ఆగస్టు 2026, సత్తుపల్లి. మీ ఆశీస్సులు కోరుతూ.",
      },
      { property: "og:title", content: "సాయి వంశి ❤ ఉదయ భాను — నిశ్చితార్థ ఆహ్వానం" },
      {
        property: "og:description",
        content: "21 ఆగస్టు 2026 • సత్తుపల్లి — మా ఇంటి శుభకార్యానికి మీరు రావాలి, ఆశీర్వదించాలి.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MAPS = "https://maps.app.goo.gl/1zk6qwgdq5Dsv7226";

function Petals() {
  const petals = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {petals.map((_, i) => (
        <span
          key={i}
          className="petal absolute block rounded-full"
          style={{
            left: `${(i * 7.7 + 2) % 100}%`,
            width: `${6 + (i % 4) * 4}px`,
            height: `${6 + (i % 5) * 3}px`,
            backgroundColor: i % 3 === 0
              ? "oklch(0.68 0.18 18 / 0.45)"
              : i % 3 === 1
                ? "oklch(0.82 0.19 82 / 0.45)"
                : "oklch(0.66 0.2 60 / 0.45)",
            animationDuration: `${8 + (i % 6) * 3}s`,
            animationDelay: `${i * 0.9}s`,
          }}
        />
      ))}
    </div>
  );
}

function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setPlaying((p) => !p)}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-marigold-deep text-cream shadow-lg ring-2 ring-cream/80 transition-transform active:scale-95"
    >
      {playing ? (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="5" width="4" height="14" rx="1" />
          <rect x="14" y="5" width="4" height="14" rx="1" />
        </svg>
      ) : (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7L8 5z" />
        </svg>
      )}
    </button>
  );
}

function Divider() {
  return (
    <div className="my-8 flex items-center justify-center gap-3 text-marigold-deep">
      <span className="h-px w-12 bg-marigold-deep/50" />
      <span className="text-lg">✿</span>
      <span className="h-px w-20 bg-marigold-deep/50" />
      <span className="text-lg">✿</span>
      <span className="h-px w-12 bg-marigold-deep/50" />
    </div>
  );
}

function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 py-10 text-center">
      <div className="pointer-events-none absolute inset-5 rounded-[2.5rem] border-2 border-marigold/60" aria-hidden />
      <div className="pointer-events-none absolute inset-8 rounded-[2rem] border-2 border-dashed border-marigold-deep/40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,oklch(0.82_0.19_82/0.25),transparent_60%)]" aria-hidden />

      <p className="font-telugu text-base font-bold tracking-[0.35em] text-marigold-deep">శుభం</p>
      <div className="relative mt-2">
        <div className="absolute inset-0 glow-pulse rounded-full bg-marigold/40 blur-2xl" aria-hidden />
        <img
          src={ganesha}
          alt="వినాయకుడి చిత్రం"
          width={1024}
          height={1024}
          className="relative mx-auto w-52 float-soft drop-shadow-xl"
        />
      </div>
      <p className="font-telugu mt-2 text-lg font-semibold text-ink/90">॥ శ్రీ గణేశాయ నమః ॥</p>

      <img
        src={couple}
        alt="ఉంగరం మార్చుకుంటున్న జంట చిత్రం"
        width={1024}
        height={1024}
        loading="lazy"
        className="mt-5 w-72 drop-shadow-lg"
      />

      <h1 className="font-telugu-round mt-3 text-[1.65rem] font-bold leading-snug text-ink text-glow">
        సాయి వంశి <span className="text-rose">❤</span> ఉదయ భాను
      </h1>
      <p className="font-telugu mt-2 text-base font-semibold text-ink/80">నిశ్చితార్థ శుభలేఖ</p>

      <button
        onClick={onOpen}
        className="font-telugu-round relative mt-8 overflow-hidden rounded-full bg-gradient-to-r from-marigold-deep via-ruby to-marigold-deep px-9 py-3.5 text-lg font-bold text-cream card-shadow transition-transform active:scale-95"
      >
        <span className="relative z-10">Tap to Open ✦</span>
        <span className="pointer-events-none absolute inset-0 shimmer opacity-40" aria-hidden />
      </button>
      <p className="font-telugu mt-3 text-xs font-semibold text-ink/55">శుభలేఖను తెరవడానికి నొక్కండి</p>
    </div>
  );
}

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <section className="rise-in px-6 text-center" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </section>
  );
}

function Invitation() {
  return (
    <div className="relative mx-auto max-w-md pb-20 pt-14">
      <Section>
        <img
          src={kalash}
          alt="కలశం చిత్రం"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto w-32 float-soft drop-shadow-lg"
        />
        <p className="font-telugu mt-3 text-base font-bold tracking-widest text-marigold-deep">
          ॥ శుభమస్తు ॥
        </p>
        <h2 className="font-telugu-round mt-2 text-[1.4rem] font-bold text-ink text-glow">
          నిశ్చితార్థ ఆహ్వానం
        </h2>
      </Section>

      <Divider />

      <Section delay={120}>
        <img
          src={couple}
          alt="జంట చిత్రం"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto w-64 drop-shadow-lg"
        />
        <div className="mt-3 rounded-3xl bg-gradient-to-b from-cream to-cream/70 px-5 py-7 card-shadow">
          <p className="font-telugu-round text-[1.55rem] font-bold leading-tight text-ink">
            గోలి సాయి వంశి రెడ్డి
          </p>
          <p className="font-script my-2 text-2xl font-semibold italic text-ruby">weds</p>
          <p className="font-telugu-round text-[1.55rem] font-bold leading-tight text-ink">
            పాల ఉదయ భాను రెడ్డి
          </p>
        </div>
      </Section>

      <Divider />

      <Section delay={200}>
        <img
          src={families}
          alt="కుటుంబ సభ్యుల చిత్రం"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto w-64 drop-shadow-lg"
        />
        <p className="font-telugu mt-3 text-base font-bold leading-8 text-ink/90">
          గోలి వారి కుటుంబం మరియు పాల వారి కుటుంబం
          <br />
          ఎంతో సంతోషంతో మిమ్మల్ని ఆహ్వానిస్తున్నాము.
          <br />
          మా ఇంటి ముద్దుబిడ్డల నిశ్చితార్థ వేడుకకు
          <br />
          మీరంతా తప్పక విచ్చేసి, నూతన జంటను
          <br />
          మనసారా ఆశీర్వదించాలని కోరుతున్నాము.
        </p>
      </Section>

      <Divider />

      <Section delay={280}>
        <div className="mx-auto rounded-3xl border-2 border-marigold-deep/40 bg-gradient-to-b from-cream to-cream/60 px-6 py-7 card-shadow">
          <p className="font-telugu text-base font-bold text-ruby">శుభ ముహూర్తం</p>
          <p className="font-telugu-round mt-2 text-5xl font-extrabold text-ink text-glow">21</p>
          <p className="font-telugu text-xl font-bold text-ink">ఆగస్టు 2026</p>
          <p className="font-telugu mt-1 text-sm font-semibold text-ink/65">శుక్రవారం</p>
        </div>
      </Section>

      <Divider />

      <Section delay={360}>
        <p className="font-telugu text-base font-bold text-ruby">వేదిక</p>
        <p className="font-telugu mt-2 text-base font-bold leading-8 text-ink/90">
          ఉమా గార్డెన్ దగ్గర,
          <br />
          కొత్తూరు రోడ్, ఎన్టీఆర్ నగర్,
          <br />
          సత్తుపల్లి, తెలంగాణ – 507303
        </p>
        <a
          href={MAPS}
          target="_blank"
          rel="noopener noreferrer"
          className="font-telugu-round relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-marigold-deep via-ruby to-marigold-deep px-8 py-3.5 text-base font-bold text-cream card-shadow transition-transform active:scale-95"
        >
          <span className="relative z-10">📍 Open Maps</span>
          <span className="pointer-events-none absolute inset-0 shimmer opacity-30" aria-hidden />
        </a>
      </Section>

      <Divider />

      <Section delay={440}>
        <img
          src={birds}
          alt="ప్రేమ పక్షుల చిత్రం"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto w-60 float-soft drop-shadow-lg"
        />
        <p className="font-telugu mt-2 text-base font-bold leading-8 text-ink/90">
          మీ రాక మా వేడుకకు వన్నె తెస్తుంది.
          <br />
          మీ ఆశీస్సులే మాకు అసలైన బహుమతి. 🌼
        </p>
        <p className="font-telugu mt-5 text-sm font-bold text-marigold-deep">
          ఇట్లు, మీ ఆత్మీయులు
        </p>
        <p className="font-telugu-round mt-1 text-lg font-bold text-ink">
          గోలి &amp; పాల కుటుంబ సభ్యులు
        </p>
        <p className="font-telugu mt-3 text-xs font-bold tracking-widest text-ink/55">
          ఇరు కుటుంబాల శుభాకాంక్షలతో
        </p>
      </Section>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[radial-gradient(circle_at_top,oklch(0.99_0.03_90),oklch(0.98_0.02_85))] text-ink">
      <Petals />
      <MusicPlayer />
      <div className="relative">{open ? <Invitation /> : <Cover onOpen={() => setOpen(true)} />}</div>
    </main>
  );
}
