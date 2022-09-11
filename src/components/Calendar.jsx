import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import useWindowSize from '../hooks/windowSize/useWindowSize'
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarGrid = ({events}) => {
    const { height, width } = useWindowSize()

    const today = new Date();

    const localizer = momentLocalizer(moment);

    return(
      <Calendar
        style={{ height: height, width: width }}
        toolbar={false}
        events={events}
        defaultView="day"
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        dayLayoutAlgorithm="no-overlap"

        defaultDate={new Date(today.getFullYear(), today.getMonth()+1, today.getDate())}

        // start time 9:00am
        min={new Date(today.getFullYear(), today.getMonth()+1, today.getDate(), 9)}
        // end time 9:00pm
        max={new Date(today.getFullYear(), today.getMonth()+1, today.getDate(), 21)}
      />
  )
}
export default CalendarGrid
