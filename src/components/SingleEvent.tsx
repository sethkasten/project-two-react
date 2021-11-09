import "./SingleEvent.css";
import Event from "../models/Event";
import BucketContext from "../context/BucketContext";
import { useContext } from "react";

interface Props {
  event: Event;
}

const SingleEvent = ({ event }: Props) => {
  const { addBucket, removeBucket, isBucket } = useContext(BucketContext);

  return (
    <li className="Event">
      <img
        src={event?.images[0].url}
        alt={event?.name}
        className="eventImage"
      />

      <h3>Event Name: {event.name}</h3>
      <h4>Dates: {event.dates.start.localDate}</h4>
      <h4>Location: {event._embedded.venues[0].name}</h4>
      {event?.priceRanges ? (
        <h4>
          Price: ${event.priceRanges[0].min}-${event.priceRanges[0].max}
        </h4>
      ) : (
        <h4></h4>
      )}
      {!isBucket(event?.id) ? (
        <i className="far fa-star" onClick={() => addBucket(event)}></i>
      ) : (
        <i className="fas fa-star" onClick={() => removeBucket(event.id)}></i>
      )}
    </li>
  );
};

export default SingleEvent;
