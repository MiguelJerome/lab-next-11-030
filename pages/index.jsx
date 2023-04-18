import Head from "next/head";
import Compteur from "../components/Compteur";
import Info from "../components/Info";
import Toggler from "../components/Toggler";
import CompteARebours from "../components/CompteARebours";
import { FormattedMessage } from "react-intl";

export default function Accueil() {
    return <>
        <Head>
            <title>Laboratoire | Accueil</title>
            <meta name="description" content="Page d'accueil du laboratoire présentant plusieurs composant React." />
        
            <meta property="og:title" content="Laboratoire | Accueil" />
            <meta property="og:description" content="Page d'accueil du laboratoire présentant plusieurs composant React." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>

        <FormattedMessage id="app.home.myname" />

        <CompteARebours compte={60} />
        {/*<CompteARebours compte={5} href='/images' />*/}

        <Toggler titre="Ceci est un titre" visible>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium voluptate ipsa aliquid autem mollitia quis. Maxime natus doloribus cum, laborum voluptatem officia accusamus quaerat dolore nostrum vero et, vitae fugiat?
        </Toggler>
        <Toggler titre="Spoilers">Allo!</Toggler>

        <Compteur />
        <Compteur depart={50} />

        <Info text="Bonjour, je suis simple" />
        <Info />
        <Info>
            Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Quisquam officia maiores nobis ad
            doloribus voluptates impedit qui rem
            praesentium quas error cumque, accusamus
            dolores perferendis dicta eum quam aliquid
            illo?
        </Info>
    </>
}