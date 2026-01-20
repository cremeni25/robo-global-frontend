/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
        },
        finance: {
          positive: "var(--color-finance-positive)",
          neutral: "var(--color-finance-neutral)",
          negative: "var(--color-finance-negative)",
        },
        system: {
          ok: "var(--color-system-ok)",
          alert: "var(--color-system-alert)",
          critical: "var(--color-system-critical)",
        },
        neutral: {
          bg: "var(--color-neutral-bg)",
          surface: "var(--color-neutral-surface)",
          text: {
            primary: "var(--color-neutral-text-primary)",
            secondary: "var(--color-neutral-text-secondary)",
          },
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--elevation-sm)",
        md: "var(--elevation-md)",
      },
    },
  },
  plugins: [],
};
