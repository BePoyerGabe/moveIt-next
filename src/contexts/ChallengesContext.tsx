import { randomBytes } from 'crypto'
import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallengesProviderData {
    level: number, 
    currentExp: number,
    experienceToNextLevel: number,
    challengesCompleted: number,
    activeChallenge: Challenge,
    levelUp: () => void, 
    startNewChallenge: () => void,
    resetChallenge: () => void,
    completeChallenge: () => void
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesProviderData)


//Provider - todos os componentes dentro desse contexto terão acesso aos dados e como _app engloba
//           toda a aplicação, todos terão acesso
export function ChallengesProvider( { children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExp, setCurrentExp] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel( level + 1 )
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if(!activeChallenge) {
            return
        }

        const { amount } = activeChallenge
        let finalExperience = currentExp + amount

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExp(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted( challengesCompleted + 1)
    }
    
    return (
        <ChallengesContext.Provider value={{ level, activeChallenge, experienceToNextLevel ,currentExp, challengesCompleted, levelUp, startNewChallenge, completeChallenge, resetChallenge }}>
            { children }
        </ChallengesContext.Provider>
    );
}

