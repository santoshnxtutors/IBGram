import React from "react";

/**
 * Minimal, dependency-free Markdown renderer for admin-authored blog bodies.
 * Supports: # ## ### #### headings, paragraphs, - / * and 1. lists,
 * **bold**, *italic*, `code`, [links](url), > blockquotes, --- rules.
 * All text is rendered through React (auto-escaped), so it is XSS-safe even
 * though the content is admin-authored.
 */

type Token =
  | { type: "h1" | "h2" | "h3" | "h4"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "hr" }
  | { type: "p"; text: string };

function tokenize(md: string): Token[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const tokens: Token[] = [];
  let para: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;

  const flushPara = () => {
    if (para.length) {
      tokens.push({ type: "p", text: para.join(" ").trim() });
      para = [];
    }
  };
  const flushList = () => {
    if (list && list.items.length) tokens.push(list);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushPara();
      flushList();
      continue;
    }
    if (/^####\s+/.test(line)) {
      flushPara(); flushList();
      tokens.push({ type: "h4", text: line.replace(/^####\s+/, "") });
    } else if (/^###\s+/.test(line)) {
      flushPara(); flushList();
      tokens.push({ type: "h3", text: line.replace(/^###\s+/, "") });
    } else if (/^##\s+/.test(line)) {
      flushPara(); flushList();
      tokens.push({ type: "h2", text: line.replace(/^##\s+/, "") });
    } else if (/^#\s+/.test(line)) {
      flushPara(); flushList();
      tokens.push({ type: "h1", text: line.replace(/^#\s+/, "") });
    } else if (/^(---|\*\*\*|___)\s*$/.test(line)) {
      flushPara(); flushList();
      tokens.push({ type: "hr" });
    } else if (/^>\s?/.test(line)) {
      flushPara(); flushList();
      tokens.push({ type: "quote", text: line.replace(/^>\s?/, "") });
    } else if (/^\s*[-*]\s+/.test(line)) {
      flushPara();
      if (!list || list.type !== "ul") { flushList(); list = { type: "ul", items: [] }; }
      list.items.push(line.replace(/^\s*[-*]\s+/, ""));
    } else if (/^\s*\d+\.\s+/.test(line)) {
      flushPara();
      if (!list || list.type !== "ol") { flushList(); list = { type: "ol", items: [] }; }
      list.items.push(line.replace(/^\s*\d+\.\s+/, ""));
    } else {
      flushList();
      para.push(line.trim());
    }
  }
  flushPara();
  flushList();
  return tokens;
}

/** Render inline markdown (**bold**, *italic*, `code`, [links](url)) to React nodes. */
function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Split on tokens while keeping them: links, bold, italic, code.
  const pattern = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  const parts = text.split(pattern);
  parts.forEach((part, i) => {
    if (!part) return;
    const key = `${keyPrefix}-${i}`;
    let m: RegExpMatchArray | null;
    if ((m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/))) {
      const href = m[2];
      const safe = /^(https?:\/\/|\/|mailto:|tel:)/i.test(href) ? href : "#";
      nodes.push(
        <a
          key={key}
          href={safe}
          className="font-semibold text-primary underline underline-offset-2 hover:text-primary/80"
          {...(safe.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {m[1]}
        </a>,
      );
    } else if ((m = part.match(/^\*\*([^*]+)\*\*$/))) {
      nodes.push(<strong key={key} className="font-bold text-foreground">{m[1]}</strong>);
    } else if ((m = part.match(/^\*([^*]+)\*$/))) {
      nodes.push(<em key={key}>{m[1]}</em>);
    } else if ((m = part.match(/^`([^`]+)`$/))) {
      nodes.push(
        <code key={key} className="rounded bg-muted/40 px-1.5 py-0.5 text-sm font-medium text-foreground">
          {m[1]}
        </code>,
      );
    } else {
      nodes.push(<React.Fragment key={key}>{part}</React.Fragment>);
    }
  });
  return nodes;
}

export function Markdown({ content, className }: { content: string; className?: string }) {
  const tokens = tokenize(content);
  return (
    <div className={className}>
      {tokens.map((tok, i) => {
        const k = `tok-${i}`;
        switch (tok.type) {
          case "h1":
            return (
              <h1 key={k} className="mt-10 mb-5 text-3xl font-black tracking-tight text-foreground md:text-4xl">
                {renderInline(tok.text, k)}
              </h1>
            );
          case "h2":
            return (
              <h2 key={k} className="mt-10 mb-4 text-2xl font-black tracking-tight text-foreground md:text-3xl">
                {renderInline(tok.text, k)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={k} className="mt-8 mb-3 text-xl font-black tracking-tight text-foreground md:text-2xl">
                {renderInline(tok.text, k)}
              </h3>
            );
          case "h4":
            return (
              <h4 key={k} className="mt-6 mb-2 text-lg font-bold text-foreground">
                {renderInline(tok.text, k)}
              </h4>
            );
          case "ul":
            return (
              <ul key={k} className="my-5 ml-1 space-y-2">
                {tok.items.map((it, j) => (
                  <li key={`${k}-${j}`} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{renderInline(it, `${k}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={k} className="my-5 ml-1 space-y-2">
                {tok.items.map((it, j) => (
                  <li key={`${k}-${j}`} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-black text-primary">
                      {j + 1}
                    </span>
                    <span>{renderInline(it, `${k}-${j}`)}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={k} className="my-6 border-l-4 border-primary/40 bg-muted/20 py-3 pl-5 pr-4 text-base italic leading-relaxed text-foreground/90">
                {renderInline(tok.text, k)}
              </blockquote>
            );
          case "hr":
            return <hr key={k} className="my-8 border-border/50" />;
          case "p":
          default:
            return (
              <p key={k} className="my-4 text-base leading-[1.85] text-muted-foreground md:text-lg">
                {renderInline((tok as { text: string }).text, k)}
              </p>
            );
        }
      })}
    </div>
  );
}
