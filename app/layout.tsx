import { Roboto } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Next JS and Framer Motion | TheBlaiseCode",
  description: "Testing out Next JS and Framer Motion Animation",
  keywords: "NextJS, tese, framer motion, animation",
  icons: {
    icon: "/profile.png",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-amber-200">
        <div className={roboto.className}>
          <NavBar />

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
