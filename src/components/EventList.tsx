import Event from "../models/Event";
import "./EventList.css";
import SingleEvent from "./SingleEvent";

interface Props {
  events: Event[];
}

const EventList = ({ events }: Props) => {
  return (
    <div className="EventList">
      <table className="eventTable">
        {events ? (
          events.map((item) => <SingleEvent event={item} key={item.id} />)
        ) : (
          <p>loading...</p>
        )}
      </table>
    </div>
  );
};

export default EventList;
