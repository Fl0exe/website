import {Inter, JetBrains_Mono} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetBrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Pabler",
  description: "This is crazy mega cool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrains_mono.className}>{children}</body>
    </html>
  );
}
