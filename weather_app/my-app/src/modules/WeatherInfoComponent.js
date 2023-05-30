import React from "react";
import styled from "styled-components";



const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;

const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <WeatherContainer>
              {/* <img src="https://th.bing.com/th/id/OIP.qev9dytCwVhofNYIUEwNHQHaE8?w=251&h=180&c=7&r=0&o=5&pid=1.7" alt="not found"/> */}
                <Condition>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </Condition>
              
            </WeatherContainer>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>

            <WeatherInfoLabel><h2>Weather Info</h2></WeatherInfoLabel>
            <WeatherInfoContainer>
              <img src="https://th.bing.com/th/id/OIP.c_KdrCoFe4WCNKW5KrSYpgHaE9?w=271&h=181&c=7&r=0&o=5&pid=1.7" alt="not found" width="80px" height="50px"/>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <img src="https://th.bing.com/th/id/OIP.sBG3Zuz4DP5PjIFGbgxclQHaE8?w=261&h=180&c=7&r=0&o=5&pid=1.7" alt="not found" width="75px" height="50px"/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <img src="https://th.bing.com/th/id/OIP.W8Lsi8BeFR2OaMfCDK5XnwHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7" alt="not found" width="80px" height="50px"/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <img src="https://th.bing.com/th/id/OIP.RQ13a_6uybVTJWsdngSm0AHaFj?w=237&h=180&c=7&r=0&o=5&pid=1.7" alt="not found" width="80px" height="50px"/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;