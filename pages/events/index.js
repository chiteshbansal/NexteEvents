import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

function EventsPage(props) {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export default EventsPage;
