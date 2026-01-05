import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shohaib Islam - Full Stack Developer",
  description: "Portfolio of Shohaib Islam, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "Web Developer", "React Developer", "Next.js", "Portfolio"],
  authors: [{ name: "Shohaib Islam" }],
  openGraph: {
    title: "Shohaib Islam - Full Stack Developer",
    description: "Portfolio of Shohaib Islam, a passionate Full Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

