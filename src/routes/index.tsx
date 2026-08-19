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
  const petals = Array.from({ length: 12 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {petals.map((_, i) => (
        <span
          key={i}
          className="petal absolute block rounded-full bg-marigold/40"
          style={{
            left: `${(i * 8.3 + 3) % 100}%`,
            width: `${6 + (i % 3) * 4}px`,
            height: `${6 + (i % 4) * 3}px`,
            animationDuration: `${9 + (i % 5) * 3}s`,
            animationDelay: `${i * 1.1}s`,
          }}
        />
      ))}
    </div>
  );
}

function Divider() {
  return (
    <div className="my-8 flex items-center justify-center gap-3 text-marigold-deep">
      <span className="h-px w-12 bg-marigold-deep/40" />
      <span className="text-lg">✿</span>
      <span className="h-px w-20 bg-marigold-deep/40" />
      <span className="text-lg">✿</span>
      <span className="h-px w-12 bg-marigold-deep/40" />
    </div>
  );
}

function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center px-6 py-10 text-center">
      <div className="pointer-events-none absolute inset-6 rounded-[2.5rem] border border-marigold-deep/25" aria-hidden />
      <div className="pointer-events-none absolute inset-8 rounded-[2rem] border border-dashed border-marigold-deep/20" aria-hidden />

      <p className="font-telugu text-sm tracking-[0.35em] text-marigold-deep">శుభం</p>
      <div className="relative mt-2">
        <div className="absolute inset-0 glow-pulse rounded-full bg-marigold/30 blur-2xl" aria-hidden />
        <img
          src={ganesha}
          alt="వినాయకుడి చిత్రం"
          width={1024}
          height={1024}
          className="relative mx-auto w-48 float-soft"
        />
      </div>
      <p className="font-telugu mt-1 text-base text-ink/80">॥ శ్రీ గణేశాయ నమః ॥</p>

      <img
        src={couple}
        alt="ఉంగరం మార్చుకుంటున్న జంట చిత్రం"
        width={1024}
        height={1024}
        loading="lazy"
        className="mt-4 w-64"
      />

      <h1 className="font-telugu-round mt-2 text-2xl leading-snug text-ink">
        సాయి వంశి <span className="text-rose">❤</span> ఉదయ భాను
      </h1>
      <p className="font-telugu mt-2 text-sm text-ink/70">నిశ్చితార్థ శుభలేఖ</p>

      <button
        onClick={onOpen}
        className="font-telugu-round mt-7 rounded-full bg-marigold-deep px-8 py-3 text-base text-cream card-shadow transition-transform active:scale-95"
      >
        శుభలేఖ తెరవండి ✦
      </button>
      <p className="font-telugu mt-3 text-xs text-ink/50">పైన నొక్కండి</p>
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
    <div className="relative mx-auto max-w-md pb-16 pt-10">
      <Section>
        <img
          src={kalash}
          alt="కలశం చిత్రం"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto w-28 float-soft"
        />
        <p className="font-telugu mt-3 text-sm tracking-widest text-marigold-deep">
          ॥ శుభమస్తు ॥
        </p>
        <h2 className="font-telugu-round mt-2 text-xl text-ink">నిశ్చితార్థ ఆహ్వానం</h2>
      </Section>

      <Divider />

      <Section delay={120}>
        <img
          src={couple}
          alt="జంట చిత్రం"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto w-60"
        />
        <div className="mt-2 rounded-3xl bg-cream/80 px-5 py-6 card-shadow">
          <p className="font-telugu-round text-2xl leading-tight text-ink">
            గోలి సాయి వంశి రెడ్డి
          </p>
          <p className="font-script my-2 text-xl italic text-marigold-deep">weds</p>
          <p className="font-telugu-round text-2xl leading-tight text-ink">
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
          className="mx-auto w-64"
        />
        <p className="font-telugu mt-3 text-[15px] leading-8 text-ink/85">
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
        <div className="mx-auto rounded-3xl border border-marigold-deep/30 bg-cream/70 px-6 py-6">
          <p className="font-telugu text-sm text-marigold-deep">శుభ ముహూర్తం</p>
          <p className="font-telugu-round mt-2 text-4xl text-ink">21</p>
          <p className="font-telugu text-lg text-ink">ఆగస్టు 2026</p>
          <p className="font-telugu mt-1 text-sm text-ink/60">శుక్రవారం</p>
        </div>
      </Section>

      <Divider />

      <Section delay={360}>
        <p className="font-telugu text-sm text-marigold-deep">వేదిక</p>
        <p className="font-telugu mt-2 text-[15px] leading-8 text-ink/85">
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
          className="font-telugu-round mt-5 inline-block rounded-full bg-marigold-deep px-7 py-3 text-cream card-shadow transition-transform active:scale-95"
        >
          📍 మ్యాప్‌లో చూడండి
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
          className="mx-auto w-56 float-soft"
        />
        <p className="font-telugu mt-2 text-[15px] leading-8 text-ink/85">
          మీ రాక మా వేడుకకు వన్నె తెస్తుంది.
          <br />
          మీ ఆశీస్సులే మాకు అసలైన బహుమతి. 🌼
        </p>
        <p className="font-telugu mt-5 text-sm text-marigold-deep">
          ఇట్లు, మీ ఆత్మీయులు
        </p>
        <p className="font-telugu-round mt-1 text-lg text-ink">
          గోలి &amp; పాల కుటుంబ సభ్యులు
        </p>
        <p className="font-telugu mt-3 text-xs tracking-widest text-ink/50">
          ఇరు కుటుంబాల శుభాకాంక్షలతో
        </p>
      </Section>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[radial-gradient(circle_at_top,var(--color-cream),oklch(0.99_0.01_95))] text-ink">
      <Petals />
      <div className="relative">{open ? <Invitation /> : <Cover onOpen={() => setOpen(true)} />}</div>
    </main>
  );
}
