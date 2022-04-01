import React, { useState, useEffect } from "react";

const Timer = () => {

    const [displays, setDisplay] = useState(false);
    const [output, setOutput] = useState("");
    useEffect(() => {
        const timer =
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${output}&appid=de91c982f0db3cc64f7ae493e2a70b93`)
                .then(result => {
                    return result.json();
                })
                .then(res => {
                    console.log(res)
                    // if (res.cod === 404) {
                    //     alert(res.message)
                    // } else {
                    console.log(setDisplay(res))


                    //     display.style.display = "block";
                    // setDisplay.innerHTML = 

                    // }
                })
        return () => {
            clearTimeout(timer)
        }
    }, [output])

    const inputHandler = (e) => {
        setQuery(e.target.value);
    }

    const buttonHandler = () => {
        var searchText = query;

        if (searchText === "") {
            console.log("Not Found")

        } else {
            setOutput(searchText)
        }
    }


}
export default Timer;