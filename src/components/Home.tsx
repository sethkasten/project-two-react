import EventList from "./EventList";
import "./Home.css";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <div className="Home">
      <SearchForm />
      <EventList />
    </div>
  );
};

export default Home;
