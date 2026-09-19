"use client";

import { PointerEvent, useEffect, useRef, useState } from "react";

/** Drag/swipe carousel state shared by the home page sliders. */
export function useDragCarousel(total: number, perView: { mobile: number; tablet: number; desktop: number; wide?: number }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(perView.desktop);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(max-width: 1023px)");
    const desktopQuery = window.matchMedia("(max-width: 1279px)");

    const syncItemsToShow = () => {
      if (mobileQuery.matches) {
        setItemsToShow(perView.mobile);
      } else if (tabletQuery.matches) {
        setItemsToShow(perView.tablet);
      } else if (desktopQuery.matches || !perView.wide) {
        setItemsToShow(perView.desktop);
      } else {
        setItemsToShow(perView.wide);
      }
    };

    syncItemsToShow();
    mobileQuery.addEventListener("change", syncItemsToShow);
    tabletQuery.addEventListener("change", syncItemsToShow);
    desktopQuery.addEventListener("change", syncItemsToShow);

    return () => {
      mobileQuery.removeEventListener("change", syncItemsToShow);
      tabletQuery.removeEventListener("change", syncItemsToShow);
      desktopQuery.removeEventListener("change", syncItemsToShow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView.mobile, perView.tablet, perView.desktop, perView.wide]);

  const maxIdx = Math.max(total - itemsToShow, 0);
  const safeActiveIdx = Math.min(activeIdx, maxIdx);

  const dragHandlers = {
    onPointerDown: (event: PointerEvent<HTMLDivElement>) => {
      dragStartX.current = event.clientX;
    },
    onPointerUp: (event: PointerEvent<HTMLDivElement>) => {
      if (dragStartX.current === null) return;
      const offset = event.clientX - dragStartX.current;
      dragStartX.current = null;

      if (offset < -50 && safeActiveIdx < maxIdx) {
        setActiveIdx(safeActiveIdx + 1);
      } else if (offset > 50 && safeActiveIdx > 0) {
        setActiveIdx(safeActiveIdx - 1);
      }
    },
    onPointerCancel: () => {
      dragStartX.current = null;
    },
  };

  return { itemsToShow, safeActiveIdx, setActiveIdx, maxIdx, dragHandlers };
}
