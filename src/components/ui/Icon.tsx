import { ICON_SPRITE, type IconName } from "@/components/ui/icon-sprite-data";

export type { IconName };

/**
 * A decorative lucide icon drawn from the per-document sprite instead of
 * inlining its paths. `/uae/dubai/ib-tutor/` inlined 356 `<svg>` elements
 * (198KB, 24% of the page) of which only 36 were unique, and every one of
 * those bytes was paid for twice -- once in the markup, once in the RSC flight
 * payload.
 *
 * The host `<svg>` keeps the attributes lucide puts there (`width`, `height`,
 * `fill`, the `lucide lucide-<name>` classes, `aria-hidden`); the inherited
 * paint attributes (`stroke`, `stroke-width`, the line joins) and the
 * `viewBox` live on the `<symbol>`, where they inherit into the shadow
 * content exactly as they did from the host. `fill` stays on the host so a
 * caller's `fill-current` class still wins, as it does today for the stars.
 */
export function Icon({ name, className }: { name: IconName; className?: string }) {
  // `ICON_SPRITE[name].cls` on an unknown name throws, and these components render
  // 9,491 pages -- several take their icon name from a JSON page store, where the
  // IconName type cannot check it. A typo there would 500 the route instead of
  // dropping one decorative glyph, so miss quietly and render nothing.
  const entry = ICON_SPRITE[name];
  if (!entry) return null;
  const cls = ["lucide", entry.cls, className].filter(Boolean).join(" ");
  return (
    <svg width="24" height="24" fill="none" className={cls} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

/**
 * The symbol definitions, emitted once per document. `<use href="#id">` only
 * resolves against symbols in the same document, so this has to be inline
 * markup -- an external sprite file would not resolve.
 */
export function IconSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      {Object.entries(ICON_SPRITE).map(([name, { glyph }]) => (
        <symbol
          key={name}
          id={`i-${name}`}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          dangerouslySetInnerHTML={{ __html: glyph }}
        />
      ))}
    </svg>
  );
}
