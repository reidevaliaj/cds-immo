import andalusianCityImage from "@/assets/andalusian-city.jpg";
import { Reveal } from "@/components/reveal";
import { WaveDivider } from "@/components/wave-divider";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={andalusianCityImage}
          alt="Andalusische Stadtszene für die Seite Über uns"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,37,0.84)_0%,rgba(10,26,37,0.74)_24%,rgba(10,26,37,0.48)_48%,rgba(10,26,37,0.16)_74%,rgba(10,26,37,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,42,57,0.06)_0%,rgba(14,42,57,0.14)_44%,rgba(239,247,251,0.22)_80%,#eff7fb_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[72svh] w-full max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3] backdrop-blur-sm">
                Über uns
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.045em] text-balance text-white sm:text-[3.55rem] lg:text-[4.5rem]">
                Über uns und warum wir.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#e7f1f5] sm:text-xl">
                Diese Seite wird im nächsten Schritt als kombinierter Bereich
                für persönliche Einordnung, Vertrauen und das Profil von
                CDS-IMMO ausgebaut.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <WaveDivider
            fill="rgba(255,255,255,0.18)"
            midFill="rgba(255,255,255,0.26)"
            topFill="rgba(255,255,255,0.38)"
            className="h-28 md:h-32"
          />
        </div>
      </section>
    </main>
  );
}
