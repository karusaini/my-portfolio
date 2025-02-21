import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: &apos;hsl(var(--background))&apos;,
  			foreground: &apos;hsl(var(--foreground))&apos;,
  			card: {
  				DEFAULT: &apos;hsl(var(--card))&apos;,
  				foreground: &apos;hsl(var(--card-foreground))&apos;
  			},
  			popover: {
  				DEFAULT: &apos;hsl(var(--popover))&apos;,
  				foreground: &apos;hsl(var(--popover-foreground))&apos;
  			},
  			primary: {
  				DEFAULT: &apos;hsl(var(--primary))&apos;,
  				foreground: &apos;hsl(var(--primary-foreground))&apos;
  			},
  			secondary: {
  				DEFAULT: &apos;hsl(var(--secondary))&apos;,
  				foreground: &apos;hsl(var(--secondary-foreground))&apos;
  			},
  			muted: {
  				DEFAULT: &apos;hsl(var(--muted))&apos;,
  				foreground: &apos;hsl(var(--muted-foreground))&apos;
  			},
  			accent: {
  				DEFAULT: &apos;hsl(var(--accent))&apos;,
  				foreground: &apos;hsl(var(--accent-foreground))&apos;
  			},
  			destructive: {
  				DEFAULT: &apos;hsl(var(--destructive))&apos;,
  				foreground: &apos;hsl(var(--destructive-foreground))&apos;
  			},
  			border: &apos;hsl(var(--border))&apos;,
  			input: &apos;hsl(var(--input))&apos;,
  			ring: &apos;hsl(var(--ring))&apos;,
  			chart: {
  				&apos;1&apos;: &apos;hsl(var(--chart-1))&apos;,
  				&apos;2&apos;: &apos;hsl(var(--chart-2))&apos;,
  				&apos;3&apos;: &apos;hsl(var(--chart-3))&apos;,
  				&apos;4&apos;: &apos;hsl(var(--chart-4))&apos;,
  				&apos;5&apos;: &apos;hsl(var(--chart-5))&apos;
  			}
  		},
  		borderRadius: {
  			lg: &apos;var(--radius)&apos;,
  			md: &apos;calc(var(--radius) - 2px)&apos;,
  			sm: &apos;calc(var(--radius) - 4px)&apos;
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
