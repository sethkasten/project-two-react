import "./SingleEvent.css";
import Event from "../models/Event";
import BucketContext from "../context/BucketContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface Props {
  event: Event;
}

const SingleEvent = ({ event }: Props) => {
  const { addBucket, removeBucket, isBucket } = useContext(BucketContext);

  return (
    <tr className="Event">
      <td className="td1">
        <Link to={`/events/${event?.id}/details`}>
          <img
            src={event?.images[0].url}
            alt={`${event?.name} thumbnail`}
            className="eventImage"
          />
        </Link>
      </td>
      <td className="td2">
        <Link to={`/events/${event?.id}/details`}>
          <h3>{event.name}</h3>
        </Link>
      </td>
      <td className="td3">
        <h4>{event.dates.start.localDate}</h4>
      </td>
      <td className="td4">
        <h4>{event._embedded.venues[0].name}</h4>
      </td>
      <td className="td5">
        {event?.priceRanges ? (
          <h4>
            ${event.priceRanges[0].min}-${event.priceRanges[0].max}
          </h4>
        ) : (
          <h4>Price Unavailable</h4>
        )}
      </td>
      <td className="td6">
        {!isBucket(event?.id) ? (
          <i className="far fa-star" onClick={() => addBucket(event)}></i>
        ) : (
          <i className="fas fa-star" onClick={() => removeBucket(event.id)}></i>
        )}
      </td>
    </tr>
  );
};

export default SingleEvent;
