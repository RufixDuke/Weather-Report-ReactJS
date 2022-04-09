import React, { useState, useEffect, Fragment } from 'react'

import DisplayWeather from '../components/DisplayWeather';
import classes from '../components/DisplayWeather.module.css'

const Wheather = () => {
    const [query, setQuery] = useState("");
    const [display, setDisplay] = useState('');
    const [output, setOutput] = useState("");

    useEffect(() => {
        const fetchLocation = () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${output}&appid=de91c982f0db3cc64f7ae493e2a70b93`)
            .then(result => result.json())
            .then(res => {
                console.log(res)
                res.cod >= 400
                    ? setDisplay(res.message || "")
                    : setDisplay(res)
            })
            .catch(e => console.log(e))
        output && fetchLocation()

    }, [output])

    const inputHandler = (e) => setQuery(e.target.value);
    const buttonHandler = () => setOutput(query)



    return (
        <Fragment>
            <div className={classes.Display}>
                <div className={classes.input}>
                    <form></form>
                    <input type="text" value={query} onChange={inputHandler} />
                    <button type='submit' className={classes.btn} onClick={buttonHandler}>
                        <i className="fas fa-search">Search</i></button>
                </div>

                <div>
                    {display instanceof Object ? <DisplayWeather  {...{ display }} /> : display}
                </div>
            </div>


        </Fragment>
    )
}

export default Wheather