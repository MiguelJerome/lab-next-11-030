import { useState } from 'react';

import styles from '../styles/Compteur.module.css'

export default function Compteur({depart}) {
    const [nombre, setNombre] = useState(depart || 0);

    const incremente = () => {
        setNombre(nombre + 1)
    }

    return <div className={styles.compteur}>
        <span className={styles.nombre}>
            {nombre}
        </span>
        <button className={styles.bouton} onClick={incremente}>
            Incrémenter
        </button>
    </div>
}