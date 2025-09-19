import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default: "HerJoy Movement - Women's Wellness & Fitness Community",
    template: "%s | HerJoy Movement"
  },
  description: "Join HerJoy Movement - a soulful wellness space for women who want to move, laugh, heal, and grow unapologetically. Whether you're holding your breath, holding a baby, or just trying to hold it together, you belong here.",

  // Keywords for SEO
  keywords: [
    "women's fitness",
    "wellness community",
    "women's health",
    "fitness programs",
    "women empowerment",
    "holistic wellness",
    "female fitness",
    "wellness movement",
    "women's workout",
    "health and wellness",
    "fitness for women",
    "women's community",
    "wellness journey",
    "female empowerment",
    "healthy lifestyle"
  ],

  // Author and classification
  authors: [{ name: "HerJoy Movement Team" }],
  creator: "HerJoy Movement",
  publisher: "HerJoy Movement",
  category: "Health & Fitness",
  classification: "Wellness and Fitness",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://herjoymovement.com", // Replace with your actual domain
    siteName: "HerJoy Movement",
    title: "HerJoy Movement - Women's Wellness & Fitness Community",
    description: "Join HerJoy Movement - a soulful wellness space for women who want to move, laugh, heal, and grow unapologetically. You belong here.",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "HerJoy Movement - Women's Wellness Community",
        type: "image/jpeg"
      }
    ]
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@herjoymovement", // Replace with your Twitter handle
    creator: "@herjoymovement",
    title: "HerJoy Movement - Women's Wellness & Fitness Community",
    description: "A soulful wellness space for women who want to move, laugh, heal, and grow unapologetically.",
    images: ["/twitter-image.jpg"] // You'll need to create this image (1200x600px recommended)
  },

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add these when you have them)
  verification: {
    google: "your-google-verification-code", // Replace with actual code from Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Additional metadata
  metadataBase: new URL("https://herjoymovement.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
      "en-US": "/en-US",
    },
  },

  // App-specific
  applicationName: "HerJoy Movement",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#A7C047" },
    { media: "(prefers-color-scheme: dark)", color: "#8FA038" }
  ],

  // Mobile and PWA
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Additional tags
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "HerJoy Movement",
    "format-detection": "telephone=no",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags that can't be set via Next.js metadata */}
        <meta name="geo.region" content="GB-LEC" />
        <meta name="geo.placename" content="Leicester, United Kingdom" />
        <meta name="geo.position" content="52.6369;-1.1398" />
        <meta name="ICBM" content="52.6369, -1.1398" />

        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/chopin.woff2" as="font" type="font/woff2" crossOrigin="" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HerJoy Movement",
              description: "A soulful wellness space for women who want to move, laugh, heal, and grow unapologetically.",
              url: "https://herjoymovement.com",
              logo: "https://herjoymovement.com/Herjoy_logo.png",
              image: "https://herjoymovement.com/og-image.jpg",
              sameAs: [
                "https://facebook.com/herjoymovement",
                "https://instagram.com/herjoymovement",
                "https://twitter.com/herjoymovement",
                "https://linkedin.com/company/herjoymovement"
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "377 Fosse Road North",
                addressLocality: "Leicester",
                postalCode: "LE3 5RT",
                addressCountry: "GB",
                addressRegion: "Leicestershire"
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: "English"
              },
              offers: {
                "@type": "Offer",
                category: "Fitness & Wellness Programs",
                availability: "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
