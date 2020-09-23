import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ColorPicker from '../components/ColorPicker';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Color Picker example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Don't Panic</h1>
        <ColorPicker />
      </main>

      <footer className={styles.footer}>A CS 312 example project</footer>
    </div>
  );
}
