import type { Metadata } from "next";
import Navbar from "@/components/root/Navbar";
import SecondaryNav from "@/components/root/SecondaryNav";
import { cn } from "@/lib/utils";
import Footer from "@/components/root/Footer";
import "../globals.css"
import dynamic from "next/dynamic";


export const metadata: Metadata = {
    title: "BNA - Mokorotlo Design",
    description: "Rise Above Fear",
};


export default function PagesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="overflow-hidden">
        <main className="flex min-h-full flex-col">
          <div>
            <Navbar />
            {/* <SecondaryNav /> */}
          </div>
          <div className="grow">{children}</div>
        </main>
        <Footer />
      </div>
    );
  }
  