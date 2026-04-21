"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const visibleImages = images.filter(Boolean);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) {
            return current;
          }

          return (current + 1) % visibleImages.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) {
            return current;
          }

          return (current - 1 + visibleImages.length) % visibleImages.length;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, visibleImages.length]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const scroller = scrollerRef.current;
      const dragState = dragStateRef.current;

      if (!scroller || !dragState || dragState.pointerId !== event.pointerId) {
        return;
      }

      const deltaX = event.clientX - dragState.startX;

      if (Math.abs(deltaX) > 6) {
        dragState.moved = true;
      }

      scroller.scrollLeft = dragState.startScrollLeft - deltaX;
    };

    const clearDragState = (event: PointerEvent) => {
      const dragState = dragStateRef.current;

      if (!dragState || dragState.pointerId !== event.pointerId) {
        return;
      }

      suppressClickRef.current = dragState.moved;
      dragStateRef.current = null;
      setIsDragging(false);

      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 120);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", clearDragState);
    window.addEventListener("pointercancel", clearDragState);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", clearDragState);
      window.removeEventListener("pointercancel", clearDragState);
    };
  }, []);

  if (visibleImages.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current - 1 + visibleImages.length) % visibleImages.length;
    });
  };

  const goToNext = () => {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return (current + 1) % visibleImages.length;
    });
  };

  const scrollByOneCard = (direction: "previous" | "next") => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const firstCard = scroller.querySelector<HTMLElement>("[data-gallery-card='true']");

    if (!firstCard) {
      return;
    }

    const gap = Number.parseFloat(window.getComputedStyle(scroller).columnGap || "0") || 0;
    const amount = firstCard.offsetWidth + gap;

    scroller.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: scroller.scrollLeft,
      moved: false,
    };
    setIsDragging(true);
  };

  return (
    <>
      <div className="mt-8 w-full max-w-full overflow-hidden lg:max-w-[42rem]">
        <div className="relative px-12">
          {visibleImages.length > 4 ? (
            <button
              type="button"
              onClick={() => scrollByOneCard("previous")}
              className="absolute left-0 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#183f55]/10 bg-white text-[#183f55] shadow-[0_10px_24px_rgba(17,44,60,0.12)] transition hover:bg-[#eff7fb]"
              aria-label="Vorherige Bilder"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          ) : null}

          <div
            ref={scrollerRef}
            className={`flex w-full max-w-full gap-3 overflow-x-auto pb-3 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onPointerDown={handlePointerDown}
          >
            {visibleImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                data-gallery-card="true"
                type="button"
                onClick={() => {
                  if (suppressClickRef.current) {
                    return;
                  }

                  setActiveIndex(index);
                }}
                onDragStart={(event) => event.preventDefault()}
                className="group relative block aspect-[1.18] w-[calc(82%-0.5rem)] shrink-0 overflow-hidden rounded-[1.55rem] border border-[#183f55]/10 bg-white shadow-[0_14px_34px_rgba(17,44,60,0.08)] transition-colors duration-300 sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.5625rem)]"
              >
                <Image
                  src={image}
                  alt={`${title} Bild ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,24,34,0)_18%,rgba(9,24,34,0.22)_100%)]" />
              </button>
            ))}
          </div>

          {visibleImages.length > 4 ? (
            <button
              type="button"
              onClick={() => scrollByOneCard("next")}
              className="absolute right-0 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#183f55]/10 bg-white text-[#183f55] shadow-[0_10px_24px_rgba(17,44,60,0.12)] transition hover:bg-[#eff7fb]"
              aria-label="Nächste Bilder"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[90] bg-[rgba(7,18,26,0.92)] px-4 py-6 backdrop-blur-md sm:px-8 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} Bildergalerie`}
          onClick={() => setActiveIndex(null)}
        >
          <div className="mx-auto flex h-full max-w-[1400px] flex-col">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Bild {activeIndex + 1} von {visibleImages.length}
              </p>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition hover:bg-white/14"
                aria-label="Galerie schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mt-6 flex min-h-0 flex-1 items-center justify-center">
              {visibleImages.length > 1 ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition hover:bg-white/14"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              ) : null}

              <div
                className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/8 bg-black/20 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={visibleImages[activeIndex]}
                  alt={`${title} Großansicht ${activeIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {visibleImages.length > 1 ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-0 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition hover:bg-white/14"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
