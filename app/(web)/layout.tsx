import Header from "@/app/_components/Header";
import "@/app/globals.css";
import { Metadata } from "next";
import { Madimi_One } from "next/font/google";
import SideNav from "@/app/_components/sideNav/index";
import { SanityLive } from "@/sanity/lib/live";


export const metadata: Metadata = {
  title: {
    template: "%s | My Portfolio",
    default: "APM | My Portfolio",
  },
};

const indieFlower = Madimi_One({
  weight:"400",
  subsets:['latin'],
  display:"swap",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${indieFlower.className} tracking-wide h-full antialiased font-bold`}>
      <body className="bg-deep-1 text-text-secondary flex h-full min-h-full flex-col">
        <div className="max-h-dvh w-full">
          <Header />
          <div className="mx-auto max-w-350 grid grid-cols-[200px_minmax(0,1fr)] pt-[8em] ">
            <nav className="hidden my-3 self-start rounded-md border border-deep-2 bg-deep-2/40 backdrop-blur-md shadow-lg p-3 lg:block">
              <SideNav />
            </nav>
            <main className="p-4 grid grid-cols-[minmax(0,1fr)_300px]">{children}</main>
            <SanityLive/>
          </div>
        </div>
      </body>
    </html>
  );
}
