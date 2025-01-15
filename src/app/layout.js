import { jost } from "@/app/components/fonts";
import "./globals.css";
import NavBar from "@/app/components/nav-bar";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  // Title metadata
  title: {
    template: "%s | Recovery Rehab",
    default:
      "Recovery Rehab | Substance Abuse Treatment Resources and Sober Life",
  },

  // Description metadata
  description:
    "Recovery Rehab aims to provide information about addiction, alcoholism, how to overcome drug addiction and to manage a sober life.",

  // Base URL
  metadataBase: new URL("https://recoveryrehab.co"),

  // Open Graph / Facebook Meta Tags
  openGraph: {
    url: "https://recoveryrehab.co/",
    type: "website",
    title: "Rehab | Substance Abuse Treatment Resources and Sober Life",
    description:
      "Recovery Rehab aims to provide information about addiction, alcoholism, how to overcome drug addiction and to manage a sober life.",
  },

  // Twitter Meta Tags
  twitter: {
    card: "summary_large_image",
    domain: "recoveryrehab.co",
    url: "https://recoveryrehab.co/",
    title: "Rehab | Substance Abuse Treatment Resources and Sober Life",
    description:
      "Recovery Rehab aims to provide information about addiction, alcoholism, how to overcome drug addiction and to manage a sober life.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased max-w-[1140px] mx-auto`}>
        <NavBar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
