import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {ChallengesContext} from './ChallengesContext'

interface CountdownContextData {
    minutes: number, 
    seconds: number, 
    isActive: boolean, 
    hasFinished: boolean, 
    resetCountdown: () => void, 
    startCountdown: () => void
}

interface CountdownProviderProps {
    children: ReactNode
}  

export const CountdownContext = createContext({} as CountdownContextData)


export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)


    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    let countdownTimeout: NodeJS.Timeout

    function startCountdown() {
        setActive(true)
    }

    function resetCountdown() {
        setActive(false)
        clearTimeout(countdownTimeout)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => { //timeout mesmo com isActive false irá executar mais uma vez após abandonar o ciclo
                setTime(time - 1)      //o setTimeout tem um retorno e assim podemos pará-lo imediatamente com a função global clear
            }, 1000);
        } else if (isActive && time === 0) {
            console.log('finalizou')
            setHasFinished(true)
            setActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <CountdownContext.Provider value={{minutes, seconds, isActive, hasFinished, resetCountdown, startCountdown}}>
            { children }
        </CountdownContext.Provider>
    )
}