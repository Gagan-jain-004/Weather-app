import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css"
import {useEffect, useState} from "react";



export default function SearchBox({updateInfo,Error}) {
    let [city,setCity]= useState("");
    let [error,setError]= useState(false);

    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="2a74400006ba4d253fc87e4d7b35b4bb";

    let getWeatherInfo = async () =>{
        try{
      let response=await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result ={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        return result;
    } catch(err){
       throw(err);
    }
};

// let handleSubmit =async (evt) =>{
//     try{
//          evt.preventDefault(),
//          setCity("");
//         console.log(city);
//       let newInfo = await  getWeatherInfo();
//       return updateInfo(newInfo);
//     }catch(err){
//        error=setError(true);
//     }
//     }; 

//     const handleError=()=>{
//         setError(false);
//      }
let handleSubmit =async (evt) =>{
    try{
         evt.preventDefault(),
         setCity("");
        console.log(city);
      let newInfo = await  getWeatherInfo();
      return updateInfo(newInfo);
    }catch(err){
       error=setError(true);
    }
    }; 

    useEffect(()=>{
        getWeatherInfo();
    },[]);
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>

            <TextField id="city" label="City Name"
             variant="outlined"
              required 
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">
            Search
            </Button>
            {error && <p style={{color:"red"}}>No such  place exists</p>}
            </form>
        </div>
    );
}