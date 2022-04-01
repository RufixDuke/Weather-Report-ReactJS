import React, { Fragment } from 'react'

// import classes from './DisplayWeather.module.css'

const DisplayWeather = ({ display }) => {
    return (
        <Fragment>
            <div>
                <div>
                    <div id="location"><i className="fas fa-map-marker-alt"></i>
                        {display.name}
                    </div>
                    <div id="res">
                        <img src={`http://openweathermap.org/img/wn/${display.weather[0].icon}@2x.png`} alt="weather icon" />
                        <div id="data">
                            <div id="upper">
                                <h1>{display.main.temp.toFixed(0)}</h1>
                                <p>°C</p>
                            </div>
                            <div id="lower">
                                <p>{display.weather[0].description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="info">
                        <p><i className="fas fa-tint"></i> Humidity: ${display.main.humidity}%</p>
                        <p> <i className="fas fa-arrow-up"></i> <i className="fas fa-arrow-down"></i>
                            Pressure:  ${display.main.pressure} in</p>
                        <p> <i className="fas fa-wind"></i> Wind: ${display.wind.speed} mph</p>
                        <p> <i className="fas fa-eye"></i> Visibility: ${display.visibility}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default DisplayWeather