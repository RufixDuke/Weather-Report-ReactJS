import React, { Fragment } from 'react'

import classes from './DisplayWeather.module.css'

const DisplayWeather = ({ display }) => {
    var f = display.main.temp
    let a = f - 273.15;
    return (
        <Fragment>
            <div>
                <div className={classes.output}>
                    <div className={classes.location}><i className="fas fa-map-marker-alt"></i>
                        {display.name}
                    </div>
                    <div className={classes.res}>
                        <img src={`http://openweathermap.org/img/wn/${display.weather[0].icon}@2x.png`} alt="weather icon" />
                        <div className={classes.data}>
                            <div className={classes.upper}>
                                <h1>{a.toFixed(1)}</h1>
                                <p>°C</p>
                            </div>
                            <div className={classes.lower}>
                                <p>{display.weather[0].description}</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.info}>
                        <p><i className="fas fa-tint"></i> Humidity: ${display.main.humidity}%</p>
                        <p> <i className="fas fa-arrow-up"></i> <i className="fas fa-arrow-down"></i>
                            Pressure:  {display.main.pressure} in</p>
                        <p> <i className="fas fa-wind"></i> Wind: {display.wind.speed} mph</p>
                        <p> <i className="fas fa-eye"></i> Visibility: {display.visibility}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DisplayWeather