import { useState } from 'react'

import styles from '../styles/Toggler.module.css'

export default function Toggler({titre, children, visible}) {
    const [etatVisible, setEtatVisible] = useState(visible)

    const toggle = () => {
        setEtatVisible(!etatVisible);
    }

    return <>
        <div className={styles.titre} onClick={toggle}>
            {titre}
        </div>
        {etatVisible &&
            <div className={styles.contenu}>
                {children}
            </div>
        }

        {/* CSS conditionnel
        <div className={styles.contenu + ' ' + (etatVisible ? '' : styles.hidden)}>
            Contenu
        </div>
        */}
    </>
}