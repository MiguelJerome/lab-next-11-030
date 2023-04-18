import { useState } from "react";

import styles from "../styles/Forms.module.css"

export default function FormControl() {
    const [courriel, setCourriel] = useState('');
    const handleCourrielChange = (event) => setCourriel(event.target.value);
    const [erreurCourriel, setErreurCourriel] = useState('');
    const valideCourriel = () => {
        if(!courriel) {
            setErreurCourriel('Le courriel est requis');
            return false;
        }
        else if(!courriel.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
            setErreurCourriel('Le courriel n\'est pas valide');
            return false;
        }
        else {
            setErreurCourriel('');
            return true;
        }
    }

    const [motpasse, setMotPasse] = useState('');
    const handleMotPasseChange = (event) => setMotPasse(event.target.value);
    const [erreurMotPasse, setErreurMotPasse] = useState('');
    const valideMotPasse = () => {
        if(!motpasse) {
            setErreurMotPasse('Le mot de passe est requis');
            return false;
        }
        else if(motpasse.length < 8) {
            setErreurMotPasse('Le mot de passe doit contenir au moins 8 caractères');
            return false;
        }
        else {
            setErreurMotPasse('');
            return true;
        }
    }

    const [rappeler, setRappeler] = useState('');
    const handleRappelerChange = (event) => setRappeler(event.target.checked);

    const handleSubmit = (event) => {
        event.preventDefault();

        let courrielValide = valideCourriel();
        let motPasseValide = valideMotPasse();

        if (courrielValide && motPasseValide) {
            let data = {
                courriel: courriel,
                motpasse: motpasse,
                rappeler: rappeler
            }

            console.log(data);
        }
    }

    return <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <label>
            Courriel:
            <input 
                type="email" 
                required 
                value={courriel} 
                onChange={handleCourrielChange} 
                onBlur={valideCourriel} />
        </label>
        {erreurCourriel &&
            <div className={styles.erreur}>
                {erreurCourriel}
            </div>
        }

        <label>
            Mot de passe:
            <input 
                type="password" 
                required 
                minLength="8" 
                value={motpasse}
                onChange={handleMotPasseChange}
                onBlur={valideMotPasse} />
        </label>
        {erreurMotPasse &&
            <div className={styles.erreur}>
                {erreurMotPasse}
            </div>
        }

        <label>
            Se rappeler de moi:
            <input 
                type="checkbox" 
                checked={rappeler} 
                onChange={handleRappelerChange} />
        </label>

        <input type="submit" value="Connecter" />
    </form>
}