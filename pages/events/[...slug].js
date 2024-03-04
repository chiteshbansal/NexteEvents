import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventPage(props) {
  const router = useRouter();

  const { slug: filteredData } = router.query;

  if (!filteredData) {
    return <p>Loading...</p>;
  }

  const year = filteredData[0];
  const month = filteredData[1];

  const numYear = +year;
  const numMonth = +month;

  console.log(numMonth, numYear);
  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter! Please adjust your values</p>;
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });
  console.log(events);
  if (!events || events.length == 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events found for the chosen filters!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </Fragment>
  );
}

export default FilteredEventPage;
