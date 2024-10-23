import styles from "./page.module.css";

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
            <img className={styles.meme} src={meme.url} alt={meme.title}/>
        </main>
    );
}
