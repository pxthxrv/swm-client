import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ view }) => {
  const dateEventHandler = (info) => {
    alert("Clicked on: " + info.dateStr);
    alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
    alert("Current view: " + info.view.type);
    // change the day's background color just for fun
    info.dayEl.style.backgroundColor = "red";
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={view}
        selectable={true}
        dateClick={dateEventHandler}
      />
    </div>
  );
};

export default Calendar;
