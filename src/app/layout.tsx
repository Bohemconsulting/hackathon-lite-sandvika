import { Toaster } from "@/components/ui/toaster";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackathon Lite Sandvika",
  description: "Informasjon om og påmelding for Hackathon Lite Sandvika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth antialiased`}
        style={{ scrollBehavior: "smooth" }}
      >
        <ReactQueryProvider>
          <main>{children}</main>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
