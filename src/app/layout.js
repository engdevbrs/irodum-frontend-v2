"use client";
import Header1 from "@/components/header/Header1";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { useEffect } from "react";
import BottomToTop from "@/components/button/BottomToTop";
import SearchModal1 from "@/components/modal/SearchModal1";
import { usePathname } from "next/navigation";
import Header3 from "@/components/header/Header3";
import {
  header1,
  header3,
  sidebarEnable,
} from "@/data/header";
import Footer2 from "@/components/footer/Footer2";
import Footer3 from "@/components/footer/Footer3";
import Footer4 from "@/components/footer/Footer4";
import Footer5 from "@/components/footer/Footer5";
import toggleStore from "@/store/toggleStore";
import { footer } from "@/data/footer";
import "react-tooltip/dist/react-tooltip.css";
import NavSidebar from "@/components/sidebar/NavSidebar";
import Footer12 from "@/components/footer/Footer12";
import Footer14 from "@/components/footer/Footer14";
import Footer15 from "@/components/footer/Footer15";
import Footer18 from "@/components/footer/Footer18";
import Footer20 from "@/components/footer/Footer20";

if (typeof window !== "undefined") {
  import("bootstrap");
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }) {
  const isListingActive = toggleStore((state) => state.isListingActive);
  const path = usePathname();

  // wow js
  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      live: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${
          path === "/register" || path === "/login"
            ? "bgc-thm4 mm-wrapper mm-wrapper--position-left-front"
            : sidebarEnable.includes(path)
            ? isListingActive
              ? "menu-hidden-sidebar-content"
              : ""
            : ""
        }`}
      >
        {!footer.includes(path) ? (
          <div className="wrapper ovh mm-page mm-slideout">
            {header1.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header1 />}
            {header3.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header3 />}

            <SearchModal1 />

            <div className="body_content">
              {children}
              {/* footer */}
              {path === "/home-4" ||
              path === "/home-7" ||
              path === "/home-13" ? (
                <Footer2 />
              ) : path === "/home-5" ? (
                <Footer3 />
              ) : path === "/home-8" ? (
                <Footer4 />
              ) : path === "/home-9" ? (
                <Footer5 />
              ) : path === "/home-12" ? (
                <Footer12 />
              ) : path === "/home-14" ? (
                <Footer14 />
              ) : path === "/home-15" ? (
                <Footer15 />
              ) : path === "/home-18" ? (
                <Footer18 />
              ) : path === "/home-20" ? (
                <Footer20 />
              ) : (
                path !== "/service-7" && path !== "/invoices" && <Footer />
              )}

              {/* bottom to top */}
              <BottomToTop />
            </div>
          </div>
        ) : (
          <div className="wrapper mm-page mm-slideout">
            {children}
            {/* bottom to top */}
            <BottomToTop />
          </div>
        )}

        {/* sidebar mobile navigation */}
        <NavSidebar />
      </body>
    </html>
  );
}
