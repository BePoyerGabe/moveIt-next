import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    //  25 - '25' - '2' '5'
    //  5  - '05' - '0' '5'

    //padStart: caso a string Não tenha no mínimo 2 de lenght, adiciona o '0' a esquerda (start)  
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </div>

            { hasFinished ? (
                <button type="button"
                        disabled 
                        className={styles.countdownButton}
                >Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button type="button" 
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                        >Abandonar ciclo
                        </button>

                    ) : (              
                        <button type="button" 
                                className={styles.countdownButton}
                                onClick={startCountdown}
                        >Iniciar um ciclo
                        </button>
                    ) } 
                </>
            )}
        </div>
    );
}