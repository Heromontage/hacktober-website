import type { Metadata } from "next";
import { Inter, Montserrat_Alternates } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserratAlt = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat-alt",
  display: "swap",
});

const minecraft = localFont({
  src: "../fonts/Minecraft.woff2",
  variable: "--font-minecraft",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hacktoberfest 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserratAlt.variable} ${minecraft.variable}`}
    >
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}