import { useEffect, useState } from "react";
import Event from "../models/Event";
import EventList from "./EventList";
import "./Home.css";
import SearchForm from "./SearchForm";
import { getTrendingEvents } from "./services/EventService";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const [location, setLocation] = useState("");
  navigator.geolocation.getCurrentPosition((response) => {
    const coords = `${response.coords.latitude},${response.coords.longitude}`;
    setLocation(coords);
    console.log(location);
  });

  useEffect(() => {
    getTrendingEvents().then((response) => {
      setEvents(response.events);
    });
  });

  return (
    <div className="Home">
      <SearchForm />
      <EventList events={events} />
    </div>
  );
};

export default Home;
