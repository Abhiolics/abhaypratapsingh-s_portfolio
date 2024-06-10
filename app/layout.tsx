import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Abhay's Portfolio | abhiolics@gmail.com",
  description: "Made with REACT/NEXT.JS, ACERTINITY UI,FRAMER_MOTION & TAILWIND CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="icon" href="/star.png" sizes="any" />
    </head>
    <body >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
  </html>
  );
}
