import Head from 'next/head';
import { Roboto_Flex, Montserrat } from '@next/font/google'
import Layout from '../components/Layout';
import { ThemeProvider } from '../components/ThemeProvider';
import { LocaleProvider } from '../components/LocaleProvider';

import 'normalize.css/normalize.css'
import '../styles/globals.css'

const roboto = Roboto_Flex({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="manifest" href="manifest.json" />
    </Head>

    <style jsx global>
      {`
        html {
          font-family: ${roboto.style.fontFamily}
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${montserrat.style.fontFamily}
        }
      `}
    </style>

    <LocaleProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </LocaleProvider>
  </>
}
