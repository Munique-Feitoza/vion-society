import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VION SOCIETY — Bespoke Private Travel & Expeditions in Ceylon",
  description: "Experience slow luxury in Sri Lanka. Tailored private journeys across ancient kingdoms, misty tea highlands, and untamed coastlines.",
  openGraph: {
    title: "VION SOCIETY — Bespoke Private Travel in Ceylon",
    description: "Curated slow luxury expeditions through Sri Lanka's tea highlands, leopard sanctuaries, and colonial ocean retreats.",
    siteName: "VION Society",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0C0F12] text-[#F7F4EE] antialiased">
        {children}
      </body>
    </html>
  );
}
