import { readFileSync } from "node:fs";
import path from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import * as lucide from "lucide-react";
import { describe, expect, it } from "vitest";
import { Icon, IconSprite } from "@/components/ui/Icon";
import { ICON_SPRITE } from "@/components/ui/icon-sprite-data";

const pascal = (kebab: string) =>
  kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

describe("Icon sprite", () => {
  it("renders a <use> reference instead of inline paths", () => {
    const html = renderToStaticMarkup(
      <Icon name="star" className="size-3.5 fill-current text-secondary" />,
    );
    expect(html).toContain('<use href="#i-star">');
    expect(html).not.toContain("<path");
    // Same class list, same order, same a11y as lucide emitted.
    expect(html).toContain('class="lucide lucide-star size-3.5 fill-current text-secondary"');
    expect(html).toContain('aria-hidden="true"');
  });

  it("defines a symbol for every icon and matches lucide's glyphs byte for byte", () => {
    const sprite = renderToStaticMarkup(<IconSprite />);
    for (const [name, { cls, glyph }] of Object.entries(ICON_SPRITE)) {
      expect(sprite, name).toContain(`id="i-${name}"`);
      const Cmp = (lucide as Record<string, unknown>)[pascal(name)] as React.ComponentType;
      expect(Cmp, `lucide-react export for ${name}`).toBeTruthy();
      const live = renderToStaticMarkup(<Cmp />);
      expect(live.replace(/^<svg\b[^>]*>/, "").replace(/<\/svg>$/, ""), name).toBe(glyph);
      expect(/class="([^"]*)"/.exec(live)?.[1], name).toBe(`lucide ${cls}`);
      expect(sprite, name).toContain(glyph);
    }
  });

  it("covers every icon name the country-seo pages ask for", () => {
    const src = readFileSync(
      path.resolve(__dirname, "../../country-seo/CountryLanding.tsx"),
      "utf8",
    );
    const used = new Set(
      [...src.matchAll(/(?:name|icon)="([a-z0-9-]+)"/g)].map((m) => m[1]),
    );
    expect(used.size).toBeGreaterThan(10);
    for (const name of used) expect(ICON_SPRITE, name).toHaveProperty(name);
    // And no lucide component is left inlining paths on those pages.
    expect(src).not.toContain("lucide-react");
  });
});
