import React from 'react'
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import EventCard from '../Components/Route/EventCard';


const PopularEventsPage = () => {
  return (
    <div>
        <Header activeHeading={4}/>
        <EventCard active={true}/>
        {/* <PopularEvents active={true}/> */}
        <Footer/>
    </div>
  )
}

export default PopularEventsPage