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
    challengesCompleted: number,
    activeChallenge: Challenge,
    levelUp: () => void, 
    startNewChallenge: () => void,
    resetChallenge: () => void
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
    
    return (
        <ChallengesContext.Provider value={{ level, activeChallenge,currentExp, challengesCompleted, levelUp, startNewChallenge,  resetChallenge }}>
            { children }
        </ChallengesContext.Provider>
    );
}

