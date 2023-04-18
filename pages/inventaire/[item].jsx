import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getInventaire, getItem } from "../../model/inventaire";

/**
 * @param {import("next").InferGetStaticPropsType<typeof getStaticProps>} param0 
 */
export default function Item({ item }) {
    return <>
        <Head>
            <title>Laboratoire | Inventaire</title>
            <meta name="description" content="Affichage de mon inventaire fantastique." />

            <meta property="og:title" content="Laboratoire | Inventaire" />
            <meta property="og:description" content="Affichage de mon inventaire fantastique." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>

        <main>
            <h2>{item.nom}</h2>
            <Image src={item.image} alt={item.nom} width={32} height={32} />
            <p>
                {item.description}
            </p>
            <Link href="/inventaire">Retour</Link>
        </main>
    </>
}

export async function getStaticProps({ params }) {
    let item = await getItem(params.item)

    return {
        props: {
            item
        }
    }
}

export async function getStaticPaths() {
    let inventaire = await getInventaire();
    let paths = inventaire.map((item) => ({ params: { item: item.slug } }));

    return {
        paths,
        fallback: false
    }
}
