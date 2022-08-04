import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FlightDetails from '../components/FlightDetails/FlightDetails';
import RecommendationCard from '../components/Recommendation/RecommendationCard';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import { getWeather } from '../redux/api/weather';

const Details = () => {
  const dispatch=useDispatch();
/*    useEffect(() => {
    dispatch(getWeather("istanbul"))
   }, []) */
  const flight = useSelector((state) => state.flightDetails.details);
  const weather = useSelector((state) => state.weather.weather);

  console.log(flight);

  const tags=useSelector((state)=>state.airport.tags);
  tags.forEach((item)=>{
    if(
      item.code==flight.actualArrivalAirport
    ) console.log(item.city);
  })
  return (
    <SafeAreaView style={{flex:1,justifyContent:"space-around"}} >

     <FlightDetails />
     <WeatherCard weather={weather}/>
     <RecommendationCard/>
    </SafeAreaView>
  )
}

export default Details