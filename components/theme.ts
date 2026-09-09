// these are common between light and dark modes
// we can assume that light mode's value will be used for dark mode as well
export const COMMON_STYLES = ["font-sans", "font-serif", "font-mono", "radius", "shadow-opacity", "shadow-blur", "shadow-spread", "shadow-offset-x", "shadow-offset-y", "letter-spacing", "spacing"];

export const DEFAULT_FONT_SANS = "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

export const DEFAULT_FONT_SERIF = 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif';

export const DEFAULT_FONT_MONO = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

// Default light theme styles
export const defaultLightThemeStyles = {
  background: "#f1f2f3",
  foreground: "#212529",
  card: "#ffffff",
  "card-foreground": "#333333",
  popover: "#ffffff",
  "popover-foreground": "#333333",
  primary: "#dc5211",
  "primary-foreground": "#ffffff",
  secondary: "#f3f4f6",
  "secondary-foreground": "#4b5563",
  muted: "#f9fafb",
  "muted-foreground": "#5c6672",
  accent: "#e0f2fe",
  "accent-foreground": "#1e3a8a",
  destructive: "#ef4444",
  "destructive-foreground": "#ffffff",
  border: "#e5e7eb",
  input: "#e5e7eb",
  ring: "#3b82f6",
  "chart-1": "#3b82f6",
  "chart-2": "#2563eb",
  "chart-3": "#1d4ed8",
  "chart-4": "#1e40af",
  "chart-5": "#1e3a8a",
  radius: "0.25rem",
  sidebar: "#ffffff",
  "sidebar-foreground": "#646D76",
  "sidebar-primary": "#3b82f6",
  "sidebar-primary-foreground": "#ffffff",
  "sidebar-accent": "#f1f2f3",
  "sidebar-accent-foreground": "#212529",
  "sidebar-border": "#e5e7eb",
  "sidebar-ring": "#3b82f6",
  "font-sans": DEFAULT_FONT_SANS,
  "font-serif": DEFAULT_FONT_SERIF,
  "font-mono": DEFAULT_FONT_MONO,
  "shadow-color": "rgba(29,161,242,0.15)",
  "shadow-opacity": "0",
  "shadow-blur": "0px",
  "shadow-spread": "0px",
  "shadow-offset-x": "0px",
  "shadow-offset-y": "2px",
};

// Default dark theme styles
export const defaultDarkThemeStyles = {
  ...defaultLightThemeStyles,
  background: "#0a0c0e",
  foreground: "#e8e6e3",
  card: "#262626",
  "card-foreground": "#e5e5e5",
  popover: "#262626",
  "popover-foreground": "#e5e5e5",
  primary: "#dc5211",
  "primary-foreground": "#ffffff",
  secondary: "#262626",
  "secondary-foreground": "#e5e5e5",
  muted: "#1f1f1f",
  "muted-foreground": "#a3a3a3",
  accent: "#1e3a8a",
  "accent-foreground": "#bfdbfe",
  destructive: "#ef4444",
  "destructive-foreground": "#ffffff",
  border: "#404040",
  input: "#404040",
  ring: "#3b82f6",
  "chart-1": "#60a5fa",
  "chart-2": "#3b82f6",
  "chart-3": "#2563eb",
  "chart-4": "#1d4ed8",
  "chart-5": "#1e40af",
  radius: "0.25rem",
  sidebar: "#171717",
  "sidebar-foreground": "#e5e5e5",
  "sidebar-primary": "#3b82f6",
  "sidebar-primary-foreground": "#ffffff",
  "sidebar-accent": "#1e3a8a",
  "sidebar-accent-foreground": "#bfdbfe",
  "sidebar-border": "#404040",
  "sidebar-ring": "#3b82f6",
};

// Export HSLAdjustments interface
export interface HSLAdjustments {
  hueShift: number;
  saturationScale: number;
  lightnessScale: number;
}

export type ThemeMode = "light" | "dark";

export interface ThemeState {
  styles: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  currentMode: ThemeMode;
  currentPreset: string;
  hslAdjustments: HSLAdjustments;
}

// Default theme state.
// NOTE: currentMode must be SSR-safe (a plain value). The OS "prefers-color-scheme"
// fallback is handled client-side by ThemeScript + ThemeProvider, not at module scope.
export const defaultThemeState: ThemeState = {
  styles: {
    light: defaultLightThemeStyles,
    dark: defaultDarkThemeStyles,
  },
  currentMode: "light",
  currentPreset: "dapanel",
  hslAdjustments: {
    hueShift: 0,
    saturationScale: 1,
    lightnessScale: 1,
  },
};
