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
                    navy: '#14110F',
                    slate: '#1F1A17',
                    gold: '#E86A33',
                    white: '#F5EFE6',
                    muted: '#A89F96',
                },
            },
        },
    },
    plugins: [],
};
export default config;