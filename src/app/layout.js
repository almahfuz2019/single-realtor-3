import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

const seoMetadata = {
  title: "Matthew Davidson",
  description:
    "Welcome to Our Website. Discover your dream home with our expert agents. We offer personalized service, extensive listings, and local market knowledge. Whether buying or selling, we guide you every step of the way. Trust Prime Realty for a seamless real estate experience. Contact us today to get started!",
  keywords: "Next.js, React, SEO, Web Development",
  author: "Your Name",
  og: {
    title: "Matthew Davidson",
    description:
      "Welcome to Our Website. Discover your dream home with our expert agents. We offer personalized service, extensive listings, and local market knowledge. Whether buying or selling, we guide you every step of the way. Trust Prime Realty for a seamless real estate experience. Contact us today to get started!",
    image: "/path-to-your-image.jpg",
    url: "https://yourwebsite.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Davidson",
    description:
      "Welcome to Our Website. Discover your dream home with our expert agents. We offer personalized service, extensive listings, and local market knowledge. Whether buying or selling, we guide you every step of the way. Trust Prime Realty for a seamless real estate experience. Contact us today to get started!",
    image: "/path-to-your-image.jpg",
  },
  favicon: "../app/favicon.ico",
};

export const metadata = {
  title: seoMetadata.title,
  description: seoMetadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={seoMetadata.description} />
        <meta name="keywords" content={seoMetadata.keywords} />
        <meta name="author" content={seoMetadata.author} />
        <meta property="og:title" content={seoMetadata.og.title} />
        <meta property="og:description" content={seoMetadata.og.description} />
        <meta property="og:image" content={seoMetadata.og.image} />
        <meta property="og:url" content={seoMetadata.og.url} />
        <meta name="twitter:card" content={seoMetadata.twitter.card} />
        <meta name="twitter:title" content={seoMetadata.twitter.title} />
        <meta
          name="twitter:description"
          content={seoMetadata.twitter.description}
        />
        <meta name="twitter:image" content={seoMetadata.twitter.image} />
        <title>{seoMetadata.title}</title>
        <link rel="icon" href={seoMetadata.favicon} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
