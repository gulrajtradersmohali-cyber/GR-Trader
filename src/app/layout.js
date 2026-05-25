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

    {/* Meta Pixel Code */}
    <Script id="facebook-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}
        (window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '1013045251397857');
        fbq('track', 'PageView');
      `}
    </Script>

    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1013045251397857&ev=PageView&noscript=1"
        alt="facebook-pixel"
      />
    </noscript>
    {/* End Meta Pixel Code */}
  </body>
</html>
    );
}