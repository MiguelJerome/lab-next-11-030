import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import { useTheme } from './ThemeProvider'

import logo from '../public/logo.png'
import styles from '../styles/Header.module.css'
import { useLocale } from './LocaleProvider'
import { FormattedMessage } from 'react-intl'

export default function Header() {
    const [theme, setTheme] = useTheme();
    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light')
    }

    const [locale, setLocale] = useLocale();
    const handleLocaleChange = (event) => {
        setLocale(event.target.checked ? 'en' : 'fr')
    }

    return <header className={styles.header}>
        <Link href="/">
            <Image src={logo} alt="Logo" className={styles.logo} />
        </Link>

        <h1 className={styles.titre}>
            <FormattedMessage id="app.header.title" />
        </h1>
    
        <Menu />

        <label>
            Theme: 
            <input 
                type="checkbox" 
                checked={theme === 'dark'}
                onChange={handleThemeChange} />
        </label>

        <label>
            Langue: 
            <input 
                type="checkbox" 
                checked={locale === 'en'}
                onChange={handleLocaleChange} />
        </label>
    </header>
}