import styles from "./page.module.css";
import Image from "next/image";

export default async function RandomMeme() {
    const response = await fetch(`https://meme-api.com/gimme`, {cache: 'no-store'});
    const data = await response.json();
    const meme = {title: data.title, url: data.url};

    return (
        <main className={styles.container}>
            <h1>{meme.title}</h1>
            <div className={styles.memeWrapper}>
                <Image unoptimized fill className={styles.meme} src={meme.url} alt={meme.title}/>
            </div>
        </main>
    );
}
