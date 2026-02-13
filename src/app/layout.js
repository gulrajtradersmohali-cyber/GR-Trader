import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/UiUx/Header";
import Footer from "./Components/UiUx/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GR Trader | Premium Makhana Exporter & Private Label Packaging India",
  description: "GR Trader is a leading makhana exporter from India offering premium raw makhana, roasted flavored fox nuts, and private label packaging solutions for international buyers. Bulk supply, export documentation, and global shipping support available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
