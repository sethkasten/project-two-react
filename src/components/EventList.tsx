import Event from "../models/Event";
import "./EventList.css";
import SingleEvent from "./SingleEvent";

export interface Props {
  events: Event[];
}

const EventList = ({ events }: Props) => {
  return (
    <div className="EventList">
      <h2>Events</h2>
      <ul>
        {events.map((item) => (
          <SingleEvent event={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
