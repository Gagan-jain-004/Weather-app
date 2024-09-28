import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
     const [weatherInfo , setWeatherInfo]= useState({
        
        city:"Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity:47,
        weather:"haze",
   
     });
    
     const  [error , setError]=useState(false);


     let updateInfo =(newInfo)=>{
    
        setWeatherInfo(newInfo);
     }
     let Error=(error)=>{
         if(updateInfo){
           setError(false);
         }
     }
     

    return(
        <div style={{textAlign: "center"}}> 
            <h2>Weather search </h2>
        {!error && <SearchBox updateInfo={updateInfo} error={Error}
        />}
        < InfoBox info={weatherInfo} />
        </div>
    );
}