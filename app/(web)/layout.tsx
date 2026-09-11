import Header from "@/app/_components/Header";
import "@/app/globals.css";
import { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import SideNav from "@/app/_components/sideNav/index";
import { SanityLive } from "@/sanity/lib/live";


export const metadata: Metadata = {
  title: {
    template: "%s | My Portfolio",
    default: "APM | My Portfolio",
  },
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.className} h-full antialiased`}>
      <body className="bg-deep-1 text-deep-5 flex h-full min-h-full flex-col">
        <div className="max-h-dvh w-full">
          <Header />
          <div className="mx-auto max-w-350 grid grid-cols-[200px_minmax(0,1fr)] pt-[8em] ">
            <nav className="hidden rounded-md border border-deep-2 bg-deep-2/40 backdrop-blur-md shadow-lg p-3 lg:block">
              <SideNav />
            </nav>
            <main className="p-4">{children}</main>
            <SanityLive/>
          </div>
        </div>
      </body>
    </html>
  );
}
