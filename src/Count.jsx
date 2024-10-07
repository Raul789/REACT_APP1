import { useEffect } from "react"

export default function Count({number}) { 
    useEffect( () => {
    document.title = `You clicked ${number} times`;

    return () => {
        document.title = `Standard website Title`;
    }
    }, [number]);

    return <span className = "count">{number}</span> 
}