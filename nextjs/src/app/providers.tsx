"use client";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
    >
      <NextTopLoader />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
