import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: "#0A1128",       // Deep Oxford Navy
                    dark: "#0F172A",       // Slate base
                    slate: "#1E293B",      // Card / surface background
                    gold: "#F59E0B",       // Warm Amber Gold accent
                    goldLight: "#FDE68A",
                    muted: "#94A3B8",      // Cool Slate Grey text
                    white: "#F8FAFC",      // Off-White typography
                    emerald: "#10B981",    // Live / success indicator
                },
            },
        },
    },
    plugins: [],
};
export default config;