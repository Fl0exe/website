import styles from "./page.module.css";
import Image from "next/image";

async function fetchMeme() {
    const response = await fetch(`https://meme-api.com/gimme?cache-bust=${Date.now()}`);
    const data = await response.json();
    return {
        title: data.title,
        url: data.url,
    };
}

export default async function RandomMeme() {
    const meme = await fetchMeme();

    return (
        <main className={styles.container}>
            <h1>{meme.title}</h1>
            <Image className={styles.meme} src={meme.url} alt={meme.title} width={2000} height={2000}/>
        </main>
    );
}
