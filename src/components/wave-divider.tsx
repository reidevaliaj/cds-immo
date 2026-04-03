import { cn } from "@/lib/utils";

type WaveDividerProps = {
  className?: string;
  fill?: string;
  midFill?: string;
  topFill?: string;
};

export function WaveDivider({
  className,
  fill = "rgba(255,255,255,0.2)",
  midFill = "rgba(255,255,255,0.3)",
  topFill = "rgba(255,255,255,0.42)",
}: WaveDividerProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 180"
      preserveAspectRatio="none"
      className={cn("block h-24 w-full md:h-32", className)}
    >
      <path
        d="M0 86C48 72 96 64 144 68C212 74 268 106 336 108C404 110 454 82 520 74C594 64 652 80 720 100C792 122 848 132 916 118C984 104 1038 64 1104 60C1180 56 1240 84 1308 100C1360 112 1408 110 1440 104V180H0Z"
        fill={topFill}
      />
      <path
        d="M0 106C44 98 94 88 146 92C212 96 266 122 334 128C402 134 462 118 526 102C598 84 656 82 720 96C786 110 842 138 910 144C986 150 1046 124 1116 110C1188 96 1248 100 1312 114C1364 126 1408 132 1440 130V180H0Z"
        fill={midFill}
      />
      <path
        d="M0 134C52 124 108 120 164 126C230 132 288 154 356 158C424 162 478 146 542 136C612 126 664 130 728 142C796 154 854 172 924 174C1000 176 1062 158 1132 148C1202 138 1256 140 1322 150C1372 158 1412 162 1440 160V180H0Z"
        fill={fill}
      />
    </svg>
  );
}
