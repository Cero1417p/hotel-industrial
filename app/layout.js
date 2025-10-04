import { auth } from "@/auth";
import Footer from "./_components/Footer";
import Navbar from "./_ui/Navbar";
import styles from "./styles.css";

import { Roboto } from "next/font/google";
import { signOutAction } from "./_lib/actions";
import dynamic from "next/dynamic";
import NextTopLoader from "nextjs-toploader";

const WhatsAppButton = dynamic(
  () => import("./_components/WhatsAppButton/WhatsappButton"),
  { ssr: false }
);

const roboto_font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
});

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={roboto_font.className}>
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
        <Navbar user={session?.user} signOutAction={signOutAction} />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
