import { useEffect, useState } from "react";
import Event from "../models/Event";
import { getTrendingEvents } from "../services/EventService";
import EventList from "./EventList";
import "./Home.css";
import SearchForm from "./SearchForm";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [location, setLocation] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((response) => {
      const coords = `${response.coords.latitude},${response.coords.longitude}`;
      setLocation(coords);
      getTrendingEvents(coords).then((data) => {
        setEvents(data._embedded.events);
      });
    });
  }, []);

  return (
    <div className="Home">
      <SearchForm />
      <EventList events={events} />
    </div>
  );
};

export default Home;
