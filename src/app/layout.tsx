import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "../../styles/index.scss";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}/>
      <body className={inter.className}>
        <ScrollToTop/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

