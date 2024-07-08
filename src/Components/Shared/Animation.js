// src/utils/animation.js

"use client"; // Add this line at the top

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Animation() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Since this is a client component and does not render anything,
  // we return null or a fragment
  return null;
}
