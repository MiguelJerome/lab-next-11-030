import Header from "./Header";
import IndicateurHorsLigne from "./IndicateurHorsLigne";
import { useTheme } from "./ThemeProvider";

import styles from '../styles/Layout.module.css';
import DemandeInstallation from "./DemandeInstallation";

export default function Layout({children}) {
    const [theme, setTheme] =useTheme();

    return <div className={styles.layout} data-theme={theme}>
        <Header />
        <DemandeInstallation />
        <IndicateurHorsLigne />

        {children}

        {/* Footer ici si présent */}
    </div>
}