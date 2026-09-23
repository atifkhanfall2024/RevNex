import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { GsapProvider } from "@/components/animations/GsapProvider";
import { siteConfig } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

const themeScript = `
(function () {
  try {
    var t = localStorage.getItem('proclaimcare-theme') || localStorage.getItem('revnex-theme');
    var dark = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(dark ? 'dark' : 'light');
    root.style.colorScheme = dark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <Script id="proclaimcare-theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <ThemeProvider>
          <GsapProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </GsapProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
