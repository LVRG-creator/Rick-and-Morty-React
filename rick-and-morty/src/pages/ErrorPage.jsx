import { useState } from "react"

const ErrorPage = () => {
    const [userExplanation, setUserExplanation] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(userExplanation)
    }

    return(
        <>
            <h1>SOMETHING WENT WRONG</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <p>Please tell us what actions caused this error</p>
                <textarea 
                  rows={25} 
                  value={userExplanation}
                  onChange={(e)=>setUserExplanation(e.target.value)}
                >
                </textarea>
                <input type="submit"/>
            </form>
        </>
    )
}

export default ErrorPage