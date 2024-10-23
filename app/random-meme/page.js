import styles from "./page.module.css";

export default async function RandomMeme() {
    const response = await fetch(`https://meme-api.com/gimme`, {cache: 'no-store'});
    const data = await response.json();
    const meme = {title: data.title, url: data.url};

    return (
        <main className={styles.container}>
            <h1>{meme.title}</h1>
            <img className={styles.meme} src={meme.url} alt={meme.title}/>
        </main>
    );
}
