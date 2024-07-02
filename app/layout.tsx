"use client"
import "./globals.css";
import { ThemeProvider } from "./provider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  useEffect(() => {
    document.title = "Abhay's Portfolio | abhiolics@gmail.com";
  }, []);

  const finishLoading = () => {
    setIsLoading(false);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/star.png" sizes="any" />
      </head>
      <body>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={finishLoading} />
        ) : (
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}



