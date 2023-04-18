import Head from "next/head";
import { useTheme } from "../components/ThemeProvider";

export default function Test() {
    const [theme, setTheme] = useTheme();

    return <>
        <Head>
            <title>Laboratoire | Test</title>
            <meta name="description" content="Page de test presque vide." />
        
            <meta property="og:title" content="Laboratoire | Test" />
            <meta property="og:description" content="Page de test presque vide." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>

        Test
        <div>
            {theme === 'light' ? 
                <div>ALlo</div> : 
                <div>Salut</div> 
            }
        </div>
    </>
}