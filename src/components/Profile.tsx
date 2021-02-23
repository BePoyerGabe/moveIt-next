import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={ styles.profileContainer}>
            <img src="https://github.com/BePoyerGabe.png" alt="Bernardo Poyer"/>
            <div>
                <strong>Bernardo Poyer</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level </p>
            </div>
        </div>
    )
}