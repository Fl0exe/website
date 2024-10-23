import styles from "./page.module.css";
import React from "react";
import BadgeCarousel from "@/components/badge-carousel/badge-carousel";
import Card from "@/components/card/card";
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <Card topImage={"/images/Fl0.exe.png"}>
                    <h1>Florian Pabler</h1>
                    <p>
                        I am a German Software Engineer specializing in writing software.
                        <Image className={styles.emoji} src={"/images/cool.svg"} alt={"cool"} width={300} height={300}/>
                    </p>
                </Card>
                <Card>
                    <p>
                        IDEs like IntelliJ IDEA, PyCharm, and WebStorm are my personal Go-To. My daily OS choices range
                        from Arch Linux to macOS, depending on the device. I’m currently delving into Next.js and
                        React.
                    </p>
                </Card>
            </div>

            <h3 className={styles.center}>The Software and Hardware I have worked with</h3>
            <BadgeCarousel/>

        </main>
    );
}
