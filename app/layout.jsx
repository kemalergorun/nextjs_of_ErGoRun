import { Geist, Geist_Mono, Dancing_Script, Roboto } from "next/font/google";
import "@/styles/globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learning Next",
  description: "This is an application utilizes how Next.Js works",
  applicationName: "Learning Next",
  authors: [
    {
      url: "https://github/aburraq",
      name: "Burak",
    },
  ],
  generator: "Next.js",
  keywords: ["next", "javascript", "image optimization", "react"],
  robots: "index, follow",
  metadataBase: new URL("http://localhost:3000"),
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
