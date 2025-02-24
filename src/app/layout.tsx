import { Providers } from "@/components/Providers";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <div className="container mx-auto p-4 flex flex-col items-center justify-center">
            {children}
            </div>
        </Providers>
      </body>
    </html>
  );
}
