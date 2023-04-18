import { useEffect, useState } from 'react'
import styles from '../styles/DemandeInstallation.module.css'

export default function DemandeInstallation() {
    const [popup, setPopup] = useState(null);

    const handlePopup = (event) => {
        event.preventDefault();
        setPopup(event);
    }

    const handleClickInstall = async () => {
        popup.prompt();

        const { outcome } = await popup.userChoice;
        if(outcome === 'accepted') {
            setPopup(null);
        }
    }

    const handleClickCacher = () => setPopup(null);

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', handlePopup);

        return () => {
            window.removeEventListener('beforeinstallprompt', handlePopup);
            setPopup(null);
        }
    }, [])

    return popup && <div className={styles.demande}>
        <div className={styles.contenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 3h6v2h-6v-2zm3 15l7-8h-4v-4h-6v4h-4l7 8zm3-16v-2h-6v2h6zm3.213-.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z"/></svg>
            Installer l&apos;application!
            <input type="button" value="Installer" onClick={handleClickInstall} />
        </div>
        <input type="button" value="X" onClick={handleClickCacher} />
    </div>
}