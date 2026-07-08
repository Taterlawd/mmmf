import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Navbar"; // Adjust path dynamically if your alias is different

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Maayi Mary Mbuya Foundation",
  description: "From classrooms to communities, we champion education and women's empowerment for lasting change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-surface-canvas text-text-body antialiased flex flex-col min-h-screen`}>
        
        {/* Responsive, Dynamic Navbar */}
        <Navbar />

        {/* Core Main Area content node hierarchy */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <footer className="bg-foundation-maroon text-surface-canvas py-12 mt-20 border-t border-foundation-crimson">
          <div className="max-w-6xl mx-auto px-6 text-center md:text-left md:flex md:justify-between md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-serif text-2xl font-bold text-surface-canvas">Maayi Mary Mbuya Foundation</h3>
              <p className="text-sm text-surface-card/80 mt-2 max-w-sm font-light">
                From classrooms to communities, cultivating dignity, equity and opportunity.
              </p>
            </div>
            <p className="text-xs text-surface-card/60">
              &copy; {new Date().getFullYear()} Maayi Mary Mbuya Foundation. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}