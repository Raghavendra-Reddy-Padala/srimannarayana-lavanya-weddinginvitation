import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import ganesha from "@/assets/ganesha.png";
import couple from "@/assets/couple.png";
import families from "@/assets/families.png";
import kalash from "@/assets/kalash.png";
import birds from "@/assets/birds.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "శ్రీమన్నారాయణ ❤ లావణ్య — వివాహ ఆహ్వానం" },
      {
        name: "description",
        content:
          "కనుగంటి శ్రీమన్నారాయణ మరియు గుడుపురాజు లావణ్య వివాహ వేడుక — మీ ఆశీస్సులు కోరుతూ.",
      },
      { property: "og:title", content: "శ్రీమన్నారాయణ ❤ లావణ్య — వివాహ ఆహ్వానం" },
      {
        property: "og:description",
        content: "కనుగంటి & గుడుపురాజు కుటుంబాల శుభవివాహ వేడుకకు మీరు విచ్చేసి ఆశీర్వదించాలని మనవి.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MAPS = "https://share.google/VWK5WA0l4RVLwrsCd";

function Petals() {
  const petals = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {petals.map((_, i) => (
        <span
          key={i}
          className="petal absolute block rounded-full"
          style={{
            left: `${(i * 5.3 + 2) % 100}%`,
            width: `${6 + (i % 5) * 3}px`,
            height: `${5 + (i % 4) * 4}px`,
            backgroundColor: i % 4 === 0
              ? "oklch(0.68 0.18 18 / 0.5)"
              : i % 4 === 1
                ? "oklch(0.82 0.19 82 / 0.5)"
                : i % 4 === 2
                  ? "oklch(0.78 0.17 78 / 0.45)"
                  : "oklch(0.66 0.2 60 / 0.45)",
            animationDuration: `${7 + (i % 7) * 2.5}s`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}

function MusicPlayer({ playing, setPlaying }: { playing: boolean; setPlaying: React.Dispatch<React.SetStateAction<boolean>> }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music/invitation.mp3");
    audio.loop = true;
    audio.currentTime = 27;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch((err) => {
        console.error("Audio playback blocked by browser. Waiting for interaction...");
      });
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    const handleInteraction = () => {
      if (playing && audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => { });
      }
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, [playing]);

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
      <span className="text-lg">🌸</span>
      <span className="h-px w-20 bg-marigold-deep/50" />
      <span className="text-lg">🌸</span>
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

      <p className="font-telugu text-base font-bold tracking-[0.35em] text-marigold-deep">శుభం భూయాత్</p>
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
        alt="వివాహ జంట చిత్రం"
        width={1024}
        height={1024}
        loading="lazy"
        className="mt-5 w-72 drop-shadow-lg"
      />

      <h1 className="font-telugu-round mt-3 text-[1.65rem] font-bold leading-snug text-ink text-glow">
        శ్రీమన్నారాయణ <span className="text-rose">❤</span> లావణ్య
      </h1>
      <p className="font-telugu mt-2 text-base font-semibold text-ink/80">వివాహ శుభలేఖ</p>

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

        <p className="font-telugu mt-3 text-base font-bold tracking-widest text-marigold-deep">
          ॥ శుభవివాహం ॥
        </p>
        <h2 className="font-telugu-round mt-2 text-[1.4rem] font-bold text-ink text-glow">
          వివాహ ఆహ్వానం
        </h2>
      </Section>

      <Divider />

      <Section delay={120}>
        <img
          src={couple}
          alt="వివాహ జంట చిత్రం"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto w-64 drop-shadow-lg"
        />
        <div className="mt-3 rounded-3xl bg-gradient-to-b from-cream to-cream/70 px-5 py-7 card-shadow">
          <p className="font-telugu-round text-[1.55rem] font-bold leading-tight text-ink">
            కనుగంటి శ్రీమన్నారాయణ
          </p>
          <p className="font-script my-3 text-2xl font-semibold italic text-ruby">weds</p>
          <p className="font-telugu-round text-[1.55rem] font-bold leading-tight text-ink">
            గుడుపురాజు లావణ్య
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
          కనుగంటి వారి కుటుంబం మరియు గుడుపురాజు వారి కుటుంబం
          <br />
          ఎంతో ఆనందంతో మిమ్మల్ని ఆహ్వానిస్తున్నాము.
          <br />
          మా ముద్దుల పిల్లల పెళ్ళి వేడుకకు
          <br />
          మీరంతా తప్పకుండా విచ్చేసి, నూతన వధూవరులను
          <br />
          మనసారా ఆశీర్వదించాలని వేడుకుంటున్నాము.
        </p>
      </Section>

      <Divider />

      <Section delay={280}>
        <div className="mx-auto rounded-3xl border-2 border-marigold-deep/40 bg-gradient-to-b from-cream to-cream/60 px-6 py-7 card-shadow">
          <p className="font-telugu text-base font-bold text-ruby">శుభ ముహూర్తం</p>
          <p className="font-telugu-round mt-2 text-5xl font-extrabold text-ink text-glow">
            {/* DATE — please update as needed */}
            21
          </p>
          <p className="font-telugu text-xl font-bold text-ink">ఆగస్టు 2026</p>
          <p className="font-telugu mt-1 text-sm font-semibold text-ink/65">శుక్రవారం</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-marigold-deep">
            <span className="text-lg">🪔</span>
            <p className="font-telugu text-sm font-bold text-ink/80">
              సప్తపదులు • మంగళసూత్ర ధారణ • జయమాల
            </p>
            <span className="text-lg">🪔</span>
          </div>
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
          మీ రాక మా వివాహ వేడుకకు వన్నె తెస్తుంది.
          <br />
          మీ ఆశీస్సులే మాకు అమూల్యమైన బహుమతి. 🌺
        </p>
        <p className="font-telugu mt-5 text-sm font-bold text-marigold-deep">
          ఇట్లు, మీ ఆత్మీయులు
        </p>
        <p className="font-telugu-round mt-1 text-lg font-bold text-ink">
          కనుగంటి &amp; గుడుపురాజు కుటుంబ సభ్యులు
        </p>
        <p className="font-telugu mt-3 text-xs font-bold tracking-widest text-ink/55">
          ఇరు కుటుంబాల వివాహ శుభాకాంక్షలతో
        </p>
      </Section>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(true);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[radial-gradient(circle_at_top,oklch(0.99_0.03_90),oklch(0.98_0.02_85))] text-ink">
      <Petals />
      <MusicPlayer playing={playing} setPlaying={setPlaying} />
      <div className="relative">
        {open ? (
          <Invitation />
        ) : (
          <Cover
            onOpen={() => {
              setOpen(true);
              setPlaying(true);
            }}
          />
        )}
      </div>
    </main>
  );
}
