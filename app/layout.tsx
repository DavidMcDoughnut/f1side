import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { avenirNext } from './fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | F1 Carbon V1',
    default: 'F1 Carbon V1',
  },
  description: "McDonutWorld UI Kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={avenirNext.variable}>
      <body className="antialiased bg-page">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
