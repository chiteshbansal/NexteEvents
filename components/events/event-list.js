import React from "react";
import EventItem from "./event-item";
import classes from './event-list.module.css';


function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {events.map((event) => {
        return <EventItem key={event.id} {...event} />;
      })}
    </ul>
  );
}

export default EventList;
