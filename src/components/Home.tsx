import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Event from "../models/Event";
import {
  getTrendingEvents,
  getEventsBySearchTerm,
} from "../services/EventService";
import EventList from "./EventList";
import "./Home.css";
import SearchForm from "./SearchForm";

const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [location, setLocation] = useState("");
  const searchTerm: string | null = new URLSearchParams(
    useLocation().search
  ).get("keyword");
  const searchDate: string | null = new URLSearchParams(
    useLocation().search
  ).get("startDateTime");
  const searchRadius: string | null = new URLSearchParams(
    useLocation().search
  ).get("radius");
  const searchCity: string | null = new URLSearchParams(
    useLocation().search
  ).get("city");

  useEffect(() => {
    if (searchTerm || searchDate || searchCity || searchRadius) {
      getEventsBySearchTerm(
        searchTerm!,
        searchDate!,
        searchRadius!,
        searchCity!
      ).then((response) => {
        setEvents(response._embedded.events);
      });
    } else {
      navigator.geolocation.getCurrentPosition((response) => {
        const coords = `${response.coords.latitude},${response.coords.longitude}`;
        setLocation(coords);
        getTrendingEvents(coords).then((data) => {
          setEvents(data._embedded.events);
        });
      });
    }
  }, [searchTerm || searchDate || searchCity || searchRadius]);

  return (
    <div className="Home">
      <SearchForm />
      <EventList events={events} />
    </div>
  );
};

export default Home;
