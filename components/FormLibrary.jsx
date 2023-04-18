import { useForm } from "react-hook-form"

import styles from "../styles/Forms.module.css"

export default function FormLibrary() {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = async (data) => {
        let reponse = await fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        if(reponse.ok) {
            console.log('Success!');
        }
    }

    return <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
        <label>
            Courriel:
            <input 
                type="email"
                {...register('courriel', {
                    required: 'Le courriel est requis',
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                        message: 'Le courriel n\'est pas valide'
                    }
                })} />
        </label>
        {errors.courriel &&
            <div className={styles.erreur}>
                {errors.courriel.message}
            </div>
        }

        <label>
            Mot de passe:
            <input 
                type="password"
                {...register('motpasse', {
                    required: 'Le mot de passe est requis',
                    minLength: {
                        value: 8,
                        message: 'Le mot de passe doit avoir au moins 8 caractères'
                    }
                })} />
        </label>
        {errors.motpasse &&
            <div className={styles.erreur}>
                {errors.motpasse.message}
            </div>
        }

        <label>
            Se rappeler de moi:
            <input 
                type="checkbox"
                {...register('rappeler')} />
        </label>

        <input type="submit" value="Connecter" />
    </form>
}