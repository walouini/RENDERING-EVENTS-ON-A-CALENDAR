import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import useWindowSize from '../hooks/windowSize/useWindowSize'
import "react-big-calendar/lib/css/react-big-calendar.css";
// import events from "../events";


const CalendarGrid = () => {
    const { height, width } = useWindowSize()

    const today = new Date();

    const localizer = momentLocalizer(moment);

    return(
        <Calendar
            localizer={localizer}
            style={{ height: height, width: width }}

            toolbar={false}
            defaultDate={new Date(today.getFullYear(), today.getMonth()+1, today.getDate())}
            defaultView="day"
            // events={events}
            views={["day"]}

            // start time 9:00am
            min={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9)}
            // end time 9:00pm
            max={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 21)}
        />
    )
}
export default CalendarGrid
