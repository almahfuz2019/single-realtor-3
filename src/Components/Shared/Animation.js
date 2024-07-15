"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Animation() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation occurs only once
    });
  }, []);

  return null;
}
