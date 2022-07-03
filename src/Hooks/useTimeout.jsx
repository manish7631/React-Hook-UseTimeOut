 
import { useEffect, useState } from 'react'
export const useTimeout = () => {

    const [ready, setReady] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            setReady(true)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return ready

}
