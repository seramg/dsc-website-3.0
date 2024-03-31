import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gdsccolours: {
          lightgrey: {
            100: "#f2f2f2",
            500: "#e6e6d0",
            900: "#e6e6e6",
          },
          neutralcore: {
            white: "#ffffff",
            black: "#000000",
          },
          darkgrey: {
            100: "#cccccc",
            200: "#838383",
            300: "#999999",
            500: "#808080",
            600: "#666666",
            700: "#4d4d4d",
            800: "#333333",
            900: "#1a1a1a",
          },
          primary: {
            900: {
              blue: "#2196f3",
              green: "#4caf50",
              red: "#f44336",
              yellow: "#ffc107",
            },
            800: {
              blue: "#42a5f5",
              green: "#66bb6a",
              red: "#ef5350",
              yellow: "#ffca28",
            },
            500: {
              blue: "#64b5f6",
              green: "#81c784",
              red: "#e57373",
              yellow: "#ffd54f",
            },
            300: {
              blue: "#90caf9",
              green: "#a5d6a7",
              red: "#ef9a9a",
              yellow: "#ffe082",
            },
            200: {
              blue: "#bbdefb",
              green: "#c8e6c9",
              red: "#ffcdd2",
              yellow: "#ffecb3",
            },
            100: {
              blue: "#e3f2fd",
              green: "#e8f5e9",
              red: "#ffebee",
              yellow: "#fff8e1",
            },
            core: {
              green: "#34a853",
              blue: "#4285f4",
              red: "#ea4335",
              yellow: "#fbbc04",
            },
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
