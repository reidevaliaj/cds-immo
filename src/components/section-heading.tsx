import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  inverted?: boolean;
  wide?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  wide = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        wide ? "max-w-none" : "max-w-3xl",
        align === "center" && "mx-auto text-center",
        inverted && "text-[#f6efe5]",
      )}
    >
      <span className="inline-flex rounded-full border border-current/15 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b68b4c]">
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-6 text-4xl leading-none font-semibold tracking-[-0.03em] text-balance sm:text-5xl md:text-6xl",
          inverted ? "text-[#f6efe5]" : "text-[#0d2230]",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          wide ? "mt-5 text-base leading-8 text-[#5f6e79] sm:text-lg" : "mt-5 max-w-2xl text-base leading-8 text-[#5f6e79] sm:text-lg",
          align === "center" && "mx-auto",
          inverted && "text-[#d7e2e8]",
        )}
      >
        {description}
      </p>
    </div>
  );
}
