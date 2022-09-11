import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import useWindowSize from '../hooks/windowSize/useWindowSize'
import "react-big-calendar/lib/css/react-big-calendar.css";
import input from "../input.json";
import { parsingStringToDate, getDateAfterDuration } from '../utils/Utils';

const CalendarGrid = () => {
    const { height, width } = useWindowSize()

    const today = new Date();

    const localizer = momentLocalizer(moment);

    const [events, setEvents] = useState([])

    const handelEvent = (currentEvent) => {
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          id: currentEvent.id,
          title: `title: ${currentEvent.id}`,
          start: parsingStringToDate(currentEvent.start),
          end: getDateAfterDuration(currentEvent.start, currentEvent.duration),
        },
      ]);
    }

    useEffect(()=>{
      input.forEach(inputEvent => {
        handelEvent(inputEvent)
      })
    },[])

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
