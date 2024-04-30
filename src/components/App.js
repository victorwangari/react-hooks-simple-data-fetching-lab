// create your App component here
import React from "react";
import {useState ,useEffect } from "react";

function App(){
    const [data,setData] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setData(data.message)
            setIsLoading(false)

        })
    },[])
    return(
        <>
        {isLoading ? (
            <p>Loading...</p>
        ):(
            <>  
            {data && <img src={data} alt="A Random Dog" />}</>
        ) }
      
        </>
    )
}
export default App
