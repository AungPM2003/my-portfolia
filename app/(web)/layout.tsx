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

const jetBrainsMono = JetBrains_Mono({
  weight:"400",
  subsets:['latin'],
  display:"swap",
})
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${mono.className} tracking-wide h-full antialiased font-bold scroll-smooth motion-safe:scroll-smooth`}>
      <body className="bg-deep-1 text-text-secondary flex h-full min-h-full flex-col text-default">
        <div className="max-h-dvh w-full">
          <Header />
          <div className="mx-auto md:max-w-275 lg:max-w-375 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] overflow-hidden px-2 md:px-6 lg:px-10">
            <nav className="hidden pt-[8em] lg:ps-2 lg:block">
              <SideNav />
            </nav>
            <main className="h-dvh px-8 pt-[7em] grid grid-cols-[minmax(0,1fr)] lg:grid lg:grid-cols-[minmax(0,1fr)_300px] gap-6 overflow-y-auto scrollbar-thin scrollbar-thumb-s-thumb scrollbar-track-s-track content-start">{children}</main>
            <SanityLive/>
          </div>
        </div>
      </body>
    </html>
  );
}

//