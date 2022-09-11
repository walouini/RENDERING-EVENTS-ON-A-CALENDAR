import React, { useEffect, useState } from 'react';
import CalendarGrid from '../components/Calendar';
import input from "../input.json";
import { parsingStringToDate, getDateAfterDuration } from '../utils/Utils';

const CalendarSreens = () => {
    const [events, setEvents] = useState([])

    const handelEvent = () => {
        setEvents([])
        input.forEach(inputEvent => {
          setEvents((prevEvents) => [
            ...prevEvents,
            {
              id: inputEvent.id,
              title: `title: ${inputEvent.id}`,
              start: parsingStringToDate(inputEvent.start),
              end: getDateAfterDuration(inputEvent.start, inputEvent.duration),
            },
          ]);
        })
    }

    useEffect(()=>{
        handelEvent()
    })

    return(    
        <CalendarGrid events={events}/>
    )
}
export default CalendarSreens
