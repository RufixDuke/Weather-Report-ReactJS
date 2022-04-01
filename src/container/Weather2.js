import React, { useState, useEffect, Fragment } from 'react'

// import DisplayWeather from '../components/DisplayWeather';

const Wheather = () => {
    const [query, setQuery] = useState("");
    const [output, setOutput] = useState("");
    const [displays, setDisplay] = useState("");



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




    return (
        <Fragment>
            <div>
                <form></form>
                <input
                    type="text"
                    value={query}
                    onChange={inputHandler}
                />
                <button type='submit' onClick={buttonHandler}>Search</button>
            </div>

            <div>

                {/* <DisplayWeather key={displays.cod} display={displays} /> */}

            </div>

        </Fragment>
    )
}

export default Wheather