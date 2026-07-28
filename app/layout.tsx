import SideNavigation from "@/app/_components/SideNavigation";
import Header from "@/app/_components/Header";
import "@/app/globals.css";
import { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

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
      <body className="bg-primary-300 flex h-full min-h-full flex-col">
        <Header />
        <SideNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
