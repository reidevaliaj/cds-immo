import { Reveal } from "@/components/reveal";
import { WaveDivider } from "@/components/wave-divider";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  highlights,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#4a90b2] pt-34 text-[#f8fcfe] sm:pt-38">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,247,231,0.34),transparent_22%),radial-gradient(circle_at_82%_20%,rgba(209,239,251,0.28),transparent_26%),linear-gradient(180deg,#9fd2ea_0%,#63a8c9_44%,#2d6f91_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-20 lg:px-10">
        <Reveal>
          <span className="inline-flex rounded-full border border-white/22 bg-white/12 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#f3d8a8]">
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.05} className="max-w-4xl">
          <h1 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="max-w-3xl">
          <p className="mt-6 text-lg leading-8 text-[#eef8fc] sm:text-xl">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm text-[#f5fbfd]"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <WaveDivider
          fill="rgba(255,255,255,0.16)"
          midFill="rgba(255,255,255,0.24)"
          topFill="rgba(255,255,255,0.34)"
        />
      </div>
    </section>
  );
}
