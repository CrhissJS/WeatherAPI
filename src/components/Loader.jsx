import React, {useState, useEffect} from 'react';
import ReactLoading from 'react-loading';
import WeatherApi from './WeatherApi';

const bg = ["https://media2.giphy.com/media/WUyQbeKHhpaHrrKJu6/giphy.gif?cid=ecf05e47gphcbcqa3wzmh983gqi0twrdm6kespz7fcdy8uad&rid=giphy.gif&ct=g"]

const Loader = () => {

    const [isLoading, setIsLoading] = useState(undefined);

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setIsLoading(true);
        });
        }, 2000);
    },[])

    document.body.style = `background-image: url(${bg[0]});
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: 20%;
    `

    return (
        <div align="center">
            {
                !isLoading ? <div><h1 className="loader-title">Welcome!<br/>Loading <span className="span-title">The Weather</span><span> API</span></h1> <ReactLoading type={"spinningBubbles"} color={"white"} height={40} width={40} /></div> 
                :
                <WeatherApi/>
            }
        </div>
    );
};

export default Loader;