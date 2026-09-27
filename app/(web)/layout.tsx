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
    <html lang="en" className={`${indieFlower.className} tracking-wide h-full antialiased font-bold scroll-smooth`}>
      <body className="bg-deep-1 text-text-secondary flex h-full min-h-full flex-col text-default">
        <div className="max-h-dvh w-full ">
          <Header />
          <div className="mx-auto md:max-w-275 lg:max-w-375 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] overflow-hidden ">
            <nav className="hidden pt-[8em] lg:ps-2 lg:block">
              <SideNav />
            </nav>
            <main className="h-dvh p-4 pt-[8em] lg:grid lg:grid-cols-[minmax(0,1fr)_300px] overflow-y-scroll scrollbar-thin scrollbar-thumb-deep-2 scrollbar-track-deep-2">{children}</main>
            <SanityLive/>
          </div>
        </div>
      </body>
    </html>
  );
}

//