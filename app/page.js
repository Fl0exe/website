import styles from "./page.module.css";
import React from "react";
import BadgeWall from "@/components/badge-wall/badge-wall";
import Card from "@/components/card/card";
import Image from "next/image";
import Projects from "@/components/projects/projects"

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <Card topImage={"/images/Fl0.exe.png"}>
                    <h1>Florian Pabler</h1>
                    <p>
                        I am a German software engineer specializing in writing software.
                        <Image mode={"center"} className={styles.emoji} src={"/images/cool.svg"} alt={"cool"}
                               width={300} height={300}/>
                    </p>
                </Card>
                <Card>
                    <p>
                        IDEs like IntelliJ IDEA, PyCharm, and WebStorm are my personal Go-To. My daily OS choices range
                        from Arch Linux to macOS, depending on the device. I’m currently delving into NEXT.js and
                        React.
                    </p>
                </Card>
            </div>
            <Card>
                <h3 className={styles.center}>The Software and Hardware I have worked with</h3>
                <BadgeWall/></Card>
            <Card>
                <p>
                    I originally made this site to showcase my skills and projects. (It does that pretty well as you can
                    see.) It also taught me a lot about web-development, git, CI/CD pipelines and Docker.
                </p>
            </Card>
            <Card>
                <h3 className={styles.center}>My current Projects on GitLab</h3>
                <Projects />
            </Card>
        </main>
    );
}
