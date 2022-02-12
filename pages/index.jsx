import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import home from "../assets/home/home-header.jfif";
import Navigation from "../components/header";
import Footer from "../components/footer";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>My Blog | Home Page</title>
        <meta name="description" content="My Blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation></Navigation>

      <main className={styles.main}>
        <Image src="/home-header.jpg" layout="fill" className={styles.image} />
        <h1 className={styles.title}>Welcome To My Blog</h1>
        <div className={styles.grid}>
          <Link href={"/posts"}>
            <a className={styles.card}>
              <h2>SEE MY POSTS &rarr;</h2>
              <p>Go to posts.</p>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};
export default Home;
