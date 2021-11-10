import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getEventById } from "../services/EventService";
import "./Details.css";
import Event from "../models/Event";
import { Link } from "react-router-dom";

interface RouteParams {
  id: string;
}

const Details = () => {
  const [singleEvent, setSingleEvent] = useState<Event>();
  const id = useParams<RouteParams>().id;

  useEffect(() => {
    getEventById(id).then((response) => {
      console.log(response);
      return setSingleEvent(response);
    });
  }, [id]);

  let time: string | undefined = singleEvent?.dates.start.localTime;
  if (time?.charAt(0) === "1" && parseInt(time?.charAt(1)) > 2) {
    time = `${(parseInt(time?.slice(0, 2)) - 12).toString()}${time?.slice(
      2,
      8
    )} PM`;
  } else if (parseInt(time!?.slice(0, 2)) === 12) {
    time = `${time} PM`;
  } else {
    time = `${time} AM`;
  }

  return (
    <div className="Details">
      <h2>{singleEvent?.name}</h2>
      <img
        src={singleEvent?.images[0].url}
        alt={`${singleEvent?.name} thumbnail`}
        className="detailsImage"
      />
      <div className="date-time">
        <h4>Dates: {singleEvent?.dates.start.localDate}</h4>
        <h4>Time: {time}</h4>
      </div>
      <h4>Location: {singleEvent?._embedded.venues[0].name}</h4>
      {singleEvent?.priceRanges ? (
        <h4>
          Price: ${singleEvent?.priceRanges[0].min}-$
          {singleEvent?.priceRanges[0].max}
        </h4>
      ) : (
        <h4></h4>
      )}
      <h4>
        <a href={`${singleEvent?.url}`}>Purchase tickets at TicketMaster</a>
      </h4>
      <p className="back-home">
        <Link to="/" className="nav-link">
          <i className="fas fa-caret-left"></i> Back Home
        </Link>
      </p>
    </div>
  );
};

export default Details;
