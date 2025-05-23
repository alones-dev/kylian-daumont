import type { Metadata } from "next";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kylian Daumont - Fullstack developer",
  description: "French fullstack developer based in Paris, I'm specialized in React, Node.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="bg-noise"></div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
