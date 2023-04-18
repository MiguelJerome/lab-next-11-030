import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getInventaire } from "../../model/inventaire";

/**
 * @param {import("next").InferGetStaticPropsType<typeof getStaticProps>} param0 
 */
export default function Inventaire({inventaire}) {
    return <>
        <Head>
            <title>Laboratoire | Inventaire</title>
            <meta name="description" content="Affichage de mon inventaire fantastique." />
        
            <meta property="og:title" content="Laboratoire | Inventaire" />
            <meta property="og:description" content="Affichage de mon inventaire fantastique." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>

        <main>
            Inventaire
            {inventaire.map((item) => <div key={item.slug}>
                <Image src={item.image} alt={item.nom} width={32} height={32} />
                <div>
                    <div>{item.nom}</div>
                    <p>{item.description}</p>
                </div>
                <Link href={`/inventaire/${item.slug}`}>Plus d&apos;info</Link>
            </div>)}
        </main>
    </>
}

export async function getStaticProps() {
    let inventaire = await getInventaire();

    return {
        props: {
            inventaire
        }
    }
}
