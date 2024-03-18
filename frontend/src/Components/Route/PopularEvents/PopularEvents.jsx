import React from 'react'
import styles from '../../../Styles/styles'
import EventCard from '../EventCard'

const PopularEvents = () => {
  return (
    <div className={`${styles.section}`}>
    <div className={`${styles.heading}`}>
      <h1>Popular Events</h1>
   <div className="w-full grid">
    <EventCard/>
   </div>
    </div>
  </div>
  )
}

export default PopularEvents