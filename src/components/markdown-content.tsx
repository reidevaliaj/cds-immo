import type { ReactNode } from "react";

type MarkdownContentProps = {
  content: string;
  className?: string;
};

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const segments = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return segments.map((segment, index) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-strong-${index}`} className="font-semibold text-[#0d2230]">
          {segment.slice(2, -2)}
        </strong>
      );
    }

    return <span key={`${keyPrefix}-text-${index}`}>{segment}</span>;
  });
}

function renderParagraphLines(lines: string[], keyPrefix: string) {
  return lines.flatMap((line, lineIndex) => {
    const nodes = renderInline(line, `${keyPrefix}-line-${lineIndex}`);

    if (lineIndex === lines.length - 1) {
      return nodes;
    }

    return [...nodes, <br key={`${keyPrefix}-break-${lineIndex}`} />];
  });
}

export function MarkdownContent({
  content,
  className = "",
}: MarkdownContentProps) {
  const blocks = content
    .replace(/\r\n/g, "\n")
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className={className}>
      {blocks.map((block, index) => {
        const lines = block
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);
        const isBulletList = lines.every((line) => /^[-*]\s+/.test(line));
        const isOrderedList = lines.every((line) => /^\d+\.\s+/.test(line));

        if (isBulletList || isOrderedList) {
          const ListTag = isOrderedList ? "ol" : "ul";

          return (
            <ListTag
              key={`block-${index}`}
              className={
                isOrderedList
                  ? "list-decimal space-y-3 pl-6"
                  : "list-disc space-y-3 pl-6"
              }
            >
              {lines.map((line, itemIndex) => {
                const itemText = line.replace(/^([-*]|\d+\.)\s+/, "");

                return (
                  <li key={`item-${index}-${itemIndex}`}>
                    {renderInline(itemText, `block-${index}-item-${itemIndex}`)}
                  </li>
                );
              })}
            </ListTag>
          );
        }

        return (
          <p key={`block-${index}`}>
            {renderParagraphLines(lines, `block-${index}`)}
          </p>
        );
      })}
    </div>
  );
}
