import React, { useState, useEffect, Fragment } from 'react'

import DisplayWeather from '../components/DisplayWeather';

const Wheather = () => {
    const [query, setQuery] = useState("");
    const [display, setDisplay] = useState('');
    const [output, setOutput] = useState("london");

    useEffect(() => {
        const timer =
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${output}&appid=de91c982f0db3cc64f7ae493e2a70b93`)
                .then(result => result.json())
                .then(res => {
                    console.log(res)
                    setDisplay(res)
                })
                .then(() => clearTimeout(timer))
    }, [output])

    const inputHandler = (e) => setQuery(e.target.value);
    const buttonHandler = () => setOutput(query)



    return (
        <Fragment>
            <div>
                <form></form>
                <input type="text" value={query} onChange={inputHandler} />
                <button type='submit' onClick={buttonHandler}>Search</button>
            </div>

            <div>
                {display && <DisplayWeather  {...{ display }} />}
            </div>

        </Fragment>
    )
}

export default Wheather