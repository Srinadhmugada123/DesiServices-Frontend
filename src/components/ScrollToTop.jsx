// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * - Place once near your Routes (App.jsx or main.jsx)
 * - Automatically scrolls to top on route change
 * - Props: behavior: "auto" | "smooth" (default "auto")
 */
export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use window.scrollTo for instant or smooth scrolling
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, behavior]);

  return null;
}
