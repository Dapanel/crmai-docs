"use client";

import { defaultDarkThemeStyles, defaultLightThemeStyles } from "./theme";

export function ThemeScript() {
  const scriptContent = `
    // ----- FONT LOADING UTILITIES -----
    const DEFAULT_FONT_WEIGHTS = ["400"];

    function extractFontFamily(fontFamilyValue) {
      if (!fontFamilyValue) return null;
      const firstFont = fontFamilyValue.split(",")[0].trim();
      const cleanFont = firstFont.replace(/['"]/g, "");
      const systemFonts = [
        "ui-sans-serif",
        "ui-serif",
        "ui-monospace",
        "system-ui",
        "sans-serif",
        "serif",
        "monospace",
        "cursive",
        "fantasy"
      ];
      if (systemFonts.includes(cleanFont.toLowerCase())) {
        return null;
      }
      return cleanFont;
    }

    function buildFontCssUrl(family, weights) {
      weights = weights || DEFAULT_FONT_WEIGHTS;
      const encodedFamily = encodeURIComponent(family);
      const weightsParam = weights.join(";");
      return \`https://fonts.googleapis.com/css2?family=\${encodedFamily}:wght@\${weightsParam}&display=swap\`;
    }

    function loadGoogleFont(family, weights) {
      weights = weights || DEFAULT_FONT_WEIGHTS;
      const href = buildFontCssUrl(family, weights);
      const existing = document.querySelector(\`link[href="\${href}"]\`);
      if (existing) return;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }

    // ----- COOKIE UTILITIES -----

    function getCookie(name) {
      const cookies = document.cookie.split("; ");

      for (const cookie of cookies) {
        const separatorIndex = cookie.indexOf("=");

        if (separatorIndex === -1) continue;

        const key = cookie.substring(0, separatorIndex);
        const value = cookie.substring(separatorIndex + 1);

        if (key === name) {
          return decodeURIComponent(value);
        }
      }

      return null;
    }

    // ----- THEME INITIALIZATION -----
    (function() {
      const storageKey = "General";
      const root = document.documentElement;
      const defaultLightStyles = ${JSON.stringify(defaultLightThemeStyles)};
      const defaultDarkStyles = ${JSON.stringify(defaultDarkThemeStyles)};

      let themeState = null;
      try {
        const persistedStateJSON = getCookie(storageKey);
        if (persistedStateJSON) {
          themeState = JSON.parse(persistedStateJSON)?.state?.themeState;
        }
      } catch (e) {
        console.warn("Theme initialization: Failed to read/parse cookie:", e);
      }

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const mode = themeState?.currentMode ?? (prefersDark ? "dark" : "light");

      const activeStyles =
        mode === "dark"
          ? themeState?.styles?.dark || defaultDarkStyles
          : themeState?.styles?.light || defaultLightStyles;

      const stylesToApply = Object.keys(defaultLightStyles);

      // Apply Theme Styles properties
      for (const styleName of stylesToApply) {
        const value = activeStyles[styleName];
        if (value !== undefined) {
          root.style.setProperty(\`--\${styleName}\`, value);
        }
      }

      // Load Google fonts *immediately*
      try {
        if (activeStyles) {
          const currentFonts = {
            sans: activeStyles["font-sans"],
            serif: activeStyles["font-serif"],
            mono: activeStyles["font-mono"],
          };

          Object.entries(currentFonts).forEach(([_type, fontValue]) => {
            const fontFamily = extractFontFamily(fontValue);
            if (fontFamily) {
              loadGoogleFont(fontFamily, DEFAULT_FONT_WEIGHTS);
            }
          });
        }
      } catch (e) {
        console.warn("Theme Script initialization: Failed to load Google fonts:", e);
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: scriptContent }}
      suppressHydrationWarning
    />
  );
}
