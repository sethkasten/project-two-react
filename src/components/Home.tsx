import EventList from "./EventList";
import "./Home.css";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <div className="Home">
      <SearchForm></SearchForm>
      <EventList></EventList>
    </div>
  );
};

export default Home;
