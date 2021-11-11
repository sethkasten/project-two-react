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

  const correctedDate: string =
    event.dates.start.localDate.slice(5, 7) +
    "-" +
    event.dates.start.localDate.slice(8) +
    "-" +
    event.dates.start.localDate.slice(0, 4);

  return (
    <tr className="Event">
      <td className="td1">
        {event.hasOwnProperty("images") ? (
          <Link to={`/events/${event?.id}/details`}>
            <img
              src={event?.images[0].url}
              alt={`${event?.name} thumbnail`}
              className="eventImage"
            />
          </Link>
        ) : (
          <h4>Image Unavailable</h4>
        )}
      </td>
      <td className="td2">
        <h3>
          {" "}
          {event.hasOwnProperty("name") ? (
            <Link to={`/events/${event?.id}/details`} className="detailsLink">
              {event.name}
            </Link>
          ) : (
            "Name Unavailable"
          )}
        </h3>
      </td>
      <td className="td3">
        <h4>
          {event.hasOwnProperty("name")
            ? { correctedDate }
            : "Date Unavailable"}
        </h4>
      </td>
      <td className="td4">
        <h4>
          {event.hasOwnProperty("_embedded")
            ? event._embedded.venues[0].name
            : "Venue Unavailable"}
        </h4>
      </td>
      <td className="td5">
        {event?.priceRanges ? (
          <h4>
            ${event.priceRanges[0].min.toFixed(0)} - $
            {event.priceRanges[0].max.toFixed(0)}
          </h4>
        ) : (
          <h4>Price Unavailable</h4>
        )}
      </td>
      <td className="td6">
        <h4>Add to Bucket List</h4>
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
