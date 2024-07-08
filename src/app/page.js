import HomePage from "@/Pages/HomePage";
import { Playfair_Display, Open_Sans, Montserrat } from "next/font/google";
import React from "react";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
export default function page() {
  return (
    <div
      className={`${playfairDisplay.className} ${openSans.className} ${montserrat.className}`}
    >
      <HomePage />
    </div>
  );
}
