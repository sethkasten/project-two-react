import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Event Finder 9001</h1>
      </Link>
      <Link to="/events/bucketlist">
        <h2>Bucket List</h2>
      </Link>
      <h2>
        <a href="https://developer.ticketmaster.com/">
          Powered by TicketMaster
        </a>
      </h2>
    </div>
  );
};

export default Header;
