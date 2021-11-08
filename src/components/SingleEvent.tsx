import "./SingleEvent.css";
import Event from "../models/Event";

interface Props {
  event: Event;
}

const SingleEvent = ({ event }: Props) => {
  return (
    <li className="Event">
      <h3>{event.name}</h3>
    </li>
  );
};

export default SingleEvent;
