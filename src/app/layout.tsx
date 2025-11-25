import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/ui/Navbar";
import NextTopLoader from "nextjs-toploader";
import WhatsappButton from "@/components/WhatsappButton";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hostalindustrial.com";
const siteName = "Hostal Industrial Cajamarca";
const siteDescription = "Hostal Industrial en Cajamarca, Perú. Alojamiento cómodo, seguro y funcional para turistas, profesionales y familias. Ubicación estratégica cerca del hospital, terminal terrestre y principales atractivos turísticos.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "hostal cajamarca",
    "hotel cajamarca",
    "alojamiento cajamarca",
    "hospedaje cajamarca perú",
    "hostal industrial",
    "habitaciones cajamarca",
    "turismo cajamarca",
    "hotel cerca terminal cajamarca",
    "hotel cerca hospital cajamarca",
  ],
  authors: [{ name: "Hostal Industrial" }],
  creator: "Hostal Industrial",
  publisher: "Hostal Industrial",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/fachada-1.png`,
        width: 1200,
        height: 630,
        alt: "Hostal Industrial Cajamarca - Fachada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/fachada-1.png`],
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/hotel.png",
  },
  manifest: "/manifest.json",
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// JSON-LD Structured Data for LocalBusiness
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hostal Industrial",
  "image": `${siteUrl}/fachada-1.png`,
  "description": siteDescription,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Industrial",
    "addressLocality": "Cajamarca",
    "addressRegion": "Cajamarca",
    "addressCountry": "PE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -7.1637,
    "longitude": -78.5001,
  },
  "url": siteUrl,
  "telephone": "+51-976-000-000",
  "priceRange": "$$",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4",
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "WiFi",
      "value": true,
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Estacionamiento",
      "value": true,
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Agua Caliente",
      "value": true,
    },
  ],
};

// Definimos el tipo del usuario (ligero)
type MockUser = {
  id: string;
  name: string;
  email?: string | null;
  image?: string;
};

type MockSession = {
  user: MockUser | null;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mockSession: MockSession = {
    user: {
      id: "1",
      name: "Usuario de Prueba",
      email: "test@example.com",
      image: "https://via.placeholder.com/40",
    },
  };

  const mockNoSession: MockSession = {
    user: null,
  };

  const session: MockSession = mockNoSession;

  async function signOutAction(){
    "use server"
    console.log("Cerrar sesión (simulado)");
  };

  return (
    <html lang="es">
      <head>
        <JsonLd data={localBusinessJsonLd} />
        <meta name="theme-color" content="#dc143c" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Navbar //user={session?.user} signOutAction={signOutAction} 
        />
        <Breadcrumbs />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
