import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={ styles.profileContainer}>
            <img src="https://github.com/BePoyerGabe.png" alt="Bernardo Poyer"/>
            <div>
                <strong>Bernardo Poyer</strong>
                <p>Level </p>
            </div>
        </div>
    )
}