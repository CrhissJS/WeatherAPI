import axios from "axios";
import { useEffect, useState } from "react";

const useReceiveApi = () => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        const success = pos => {

            const lat = pos.coords.latitude
            const lon = pos.coords.longitude
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=acebb4ad9cca4df994d748a14a4df488`)
                .then((res) => setWeather(res.data));

        }

        function error(err) {
            console.warn("User denied acces to location");
        }

        navigator.geolocation.getCurrentPosition(success, error);
    },[]);

    return { weather, setWeather }
};


export default useReceiveApi;