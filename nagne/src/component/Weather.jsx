import React, { useEffect, useState } from "react";
import keys from "../APIs/keys.jsx";

const Weather = () => {
  const [areas, setAreas] = useState([
    {
      서울: {
        lat: 37.5665,
        lon: 126.978,
        areaName: "seoul",
      },
      광주: {
        lat: 35.1595,
        lon: 126.8526,
        areaName: "gwangju",
      },
      부산: {
        lat: 35.1796,
        lon: 129.0756,
        areaName: "busan",
      },
      대전: {
        lat: 36.3504,
        lon: 127.3845,
        areaName: "daejoen",
      },
      강릉: {
        lat: 37.7519,
        lon: 128.8761,
        areaName: "Gangneung",
      },
    },
  ]);
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getNowAreaGeolocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      setAreas([
        {
          현재위치: {
            lat,
            lon,
            areaName: "cur",
          },
        },
        ...areas,
      ]);
      getWeatherByArea(lat, lon);
    });
  };

  const getWeatherByArea = async (lat, lon) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
    const url = `https://data.api.xweather.com/conditions/closest?p=${lat},${lon}&client_id=${keys.weatherKey.id}&client_secret=${keys.weatherKey.secret}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather([
          data.response[0].place.name,
          `${Math.round(data.response[0].periods[0].tempC)}°C`,
          data.response[0].periods[0].weather,
          data.response[0].periods[0].icon,
        ]);
      })
      .catch();
  };

  useEffect(() => {
    getNowAreaGeolocation();
  }, []);

  return (
    <div className="side-weather">
      {isLoading ? (
        <div
          className="weather-spinner"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <img width={100} height={100} src="../src/assets/blue_spinner.svg" alt="로딩 중" />
        </div>
      ) : (
        <div className="show-weather">
          <div className="weather-text">
            <h2 className="jua-regular">{weather ? weather[1] : ""}</h2>
            <h5 className="jua-regular">{weather ? weather[2] : ""}</h5>
          </div>
          <img
            src={weather ? `../src/assets/weather_icon/${weather[3]}` : ""}
            className="weather-icon"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
