import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ViewTransitions } from 'next-view-transitions'


import "./main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Headless Wordpress",
  description: "Headless Wordpress application",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
    </ViewTransitions>
  );
}
