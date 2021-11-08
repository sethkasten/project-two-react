import "./SingleEvent.css";
import Event from "../models/Event";
import EventResponse from "../models/EventResponse";

interface Props {
  event: Event;
}

const SingleEvent = ({ event }: Props) => {
  return (
    <li className="Event">
      <img src={event?.images.url} alt={event.name} className="eventImage" />
      {/* <h3>Event Name:{event.name}</h3>
      <h4>Dates:{event.dates.start.localDate}</h4>
      <h4>Location:{event._embedded.venues[0].name}</h4>
      <h4>
        Price:{event.priceRanges.min}-{event.priceRanges.max}
      </h4> */}
    </li>
  );
};

export default SingleEvent;
