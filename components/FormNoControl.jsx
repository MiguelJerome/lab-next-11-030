import { useRef, useState } from "react";

import styles from "../styles/Forms.module.css"

export default function FormNoControl() {
    const courrielRef = useRef(null);
    const motPasseRef = useRef(null);
    const rappelerRef = useRef(null);
    const formRef = useRef(null);

    const [erreurCourriel, setErreurCourriel] = useState('');
    const valideCourriel = () => {
        if (courrielRef.current.validity.valid) {
            setErreurCourriel('');
        }
        else {
            if (courrielRef.current.validity.valueMissing) {
                setErreurCourriel('Le courriel est requis');
            }
            else if (courrielRef.current.validity.typeMismatch) {
                setErreurCourriel('Le courriel n\'est pas valide');
            }
        }
    }

    const [erreurMotPasse, setErreurMotPasse] = useState('');
    const valideMotPasse = () => {
        if (motPasseRef.current.validity.valid) {
            setErreurMotPasse('');
        }
        else {
            if (motPasseRef.current.validity.valueMissing) {
                setErreurMotPasse('Le mot de passe est requis');
            }
            else if (motPasseRef.current.validity.tooShort) {
                setErreurMotPasse('Le mot de passe doit avoir au moins 8 caractères');
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        valideCourriel();
        valideMotPasse();

        if (formRef.current.checkValidity()) {
            let data = {
                courriel: courrielRef.current.value,
                motpasse: motPasseRef.current.value,
                rappeler: rappelerRef.current.checked
            }

            console.log(data);
        }
    }

    return <form className={styles.form} noValidate ref={formRef} onSubmit={handleSubmit}>
        <label>
            Courriel:
            <input type="email" ref={courrielRef} required onBlur={valideCourriel} />
        </label>
        {erreurCourriel &&
            <div className={styles.erreur}>
                {erreurCourriel}
            </div>
        }

        <label>
            Mot de passe:
            <input type="password" ref={motPasseRef} required minLength="8" onBlur={valideMotPasse} />
        </label>
        {erreurMotPasse &&
            <div className={styles.erreur}>
                {erreurMotPasse}
            </div>
        }

        <label>
            Se rappeler de moi:
            <input type="checkbox" ref={rappelerRef} />
        </label>

        <input type="submit" value="Connecter" />
    </form>
}