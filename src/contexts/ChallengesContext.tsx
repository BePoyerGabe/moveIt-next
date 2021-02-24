import { createContext, useState, ReactNode } from 'react'

interface ChallengesProviderData {
    level: number, 
    currentExp: number, 
    challengesCompleted: number, 
    levelUp: () => void, 
    startNewChallenge: () => void
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesProviderData)


//Provider - todos os componentes dentro desse contexto terão acesso aos dados e como _app engloba
//           toda a aplicação, todos terão acesso
export function ChallengesProvider( { children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExp, setcurrentExp] = useState(0)
    const [challengesCompleted, setchallengesCompleted] = useState(0)

    function levelUp() {
        setLevel( level + 1 )
    }

    function startNewChallenge() {
        console.log('New challenge')
    }
    
    return (
        <ChallengesContext.Provider value={{ level, currentExp, challengesCompleted, levelUp, startNewChallenge }}>
            { children }
        </ChallengesContext.Provider>
    );
}

