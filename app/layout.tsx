import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import Loading from "./loading";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Montserrat ({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "BNA Mokorotlo Design",
  description: "Be Nice Authentically",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <WishlistProvider>
        <CartProvider>
          <html lang="en" className={cn("h-full scroll-smooth antialiased ", inter.className)}>
            <body>
              {/* Navbar */}
              <ClerkLoading>
                <Loading />
              </ClerkLoading>
              <ClerkLoaded>
                <main className="grow">{children}</main>
              </ClerkLoaded>
            </body>
          </html>
        </CartProvider>
      </WishlistProvider>
    </ClerkProvider>
  );
}
