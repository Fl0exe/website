import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar/navbar";

const jetBrains_mono = JetBrains_Mono({subsets: ["latin"]});

export const metadata = {
    title: "Pabler",
    description: "This is crazy mega cool",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={jetBrains_mono.className}>
        <Navbar/>
        <div className={"childrenContainer"}>
            {children}
        </div>
        </body>
        </html>
    );
}
