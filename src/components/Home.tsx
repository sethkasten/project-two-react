import { useState } from "react";
import Event from "../models/Event";
import EventList from "./EventList";
import "./Home.css";
import SearchForm from "./SearchForm";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  return (
    <div className="Home">
      <SearchForm />
      <EventList events={events} />
    </div>
  );
};

export default Home;
