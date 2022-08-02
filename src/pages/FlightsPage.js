import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Flights from '../components/Flights/Flights';
import AirportList from '../components/AirportList/AirportList';
import { getAirports } from '../redux/api/airport';

const FlightsPage = () => {
  const dispatch=useDispatch();

  const tags=useSelector((state)=>state.airport.tags)
 
  useEffect(() => {
    dispatch(getAirports())
   console.log(tags);
  }, [])
 
  return (
   <AirportList/>
  )
}

export default FlightsPage