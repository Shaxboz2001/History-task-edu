import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/index.scss";
import Header from "@/widgets/header";
import localFont from "next/font/local";

const surt = localFont({
     src: "../fonts/proximanova_regular.ttf",
     variable: "--font-surt-bold",
});
function MyApp({ Component, pageProps }: AppProps) {
     return (
          <>
               <Head>
                    <title>Tarix manba</title>
                    <link rel="icon" href="/logo.svg" />
               </Head>
               <main className={surt.variable}>
                    <Header>
                         <></>
                    </Header>
                    <Component {...pageProps} />
               </main>
          </>
     );
}

export default MyApp;
