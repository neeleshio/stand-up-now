import Head from 'next/head';
import Image from 'next/image';
import LandingPage from '@/containers/LandingPage';

export default function Home() {
    return (
        <>
            <Head>
                <title>Stand up now</title>
                <meta name="description" content="Break remainder PWA" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main>
                <LandingPage />
            </main>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {}
    };
}
