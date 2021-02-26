import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExp, experienceToNextLevel } = useContext(ChallengesContext)

    const percentageToNextLevel = Math.round((currentExp * 100)) / experienceToNextLevel

    return (
        <header className={ styles.experienceBar }>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentageToNextLevel}%` }} />

                <span className={ styles.currentExperience } style={{ left: `${percentageToNextLevel}%` }}>
                    {currentExp}xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>

        </header>
    );
}