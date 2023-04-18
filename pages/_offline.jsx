import Link from "next/link";

export default function Offline() {
    return <>
        <h2>Site web hors ligne</h2>
        <p>Vous essayer d&apos;accéder à cette page hors ligne.</p>
        <Link href="/">Retour à l&apos;accueil</Link>
    </>
}