import Header from "@/app/_components/Header";
import "@/app/globals.css";
import { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SideNav from "@/app/_components/NavComponents/sideNav";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: {
    template: "%s | My Portfolio",
    default: "APM | My Portfolio",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${mono.className} h-full scroll-smooth font-bold tracking-wide antialiased motion-safe:scroll-smooth`}
    >
      <body className="bg-deep-1 text-text-secondary text-default h-full min-h-full">
        <div className="grid h-dvh w-full grid-rows-[3rem_1fr] gap-4">
          <Header />
          <div className="container mx-auto grid gap-6 overflow-hidden lg:grid-cols-[200px_1fr]">
            <nav className="hidden pt-6 lg:block">
              <SideNav />
            </nav>
            {/* <main className="h-dvh grid lg:grid-cols-[1fr_250px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent hover:scrollbar-thumb-s-thumb p-4 duration-300 content-start gap-4">{children}</main> */}

            <main className="grid gap-x-10 gap-y-4 overflow-y-auto px-6 lg:grid-cols-[1fr_250px] lg:px-0">
              {children}
            </main>
            <SanityLive />
          </div>
        </div>
      </body>
    </html>
  );
}

//
