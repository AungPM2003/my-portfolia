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
  weight: "400",
  subsets: ['latin'],
  display: "swap",
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
      <body className="bg-deep-1 text-text-secondary h-full min-h-full  text-default">
        <div className="h-dvh w-full grid grid-rows-[3rem_1fr] gap-4">
          <Header />
          <div className="container mx-auto grid lg:grid-cols-[200px_1fr] gap-6 overflow-hidden ">
            <nav className="hidden lg:block pt-6">
              <SideNav />
            </nav>
            <main className="h-dvh grid lg:grid-cols-[1fr_250px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent hover:scrollbar-thumb-s-thumb p-4 duration-300 content-start">{children}</main>
            <SanityLive />
          </div>
        </div>
      </body>
    </html>
  );
}

//