import { Inter } from "next/font/google";
import "./globals.css";
import RadialGradient from "@/components/radial_gradient";
import { AnimatePresence } from "framer-motion";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ghostek.media",
  description: "dive in moderisms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}