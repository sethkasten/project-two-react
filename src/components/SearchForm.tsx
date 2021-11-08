import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./SearchForm.css";

const SearchForm = () => {
  const [term, setTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [city, setCity] = useState("");
  const [distance, setDistance] = useState("");
  const history = useHistory();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    history.push(
      `/events/search?${new URLSearchParams({
        term,
        startDate,
        endDate,
        city,
        distance,
      })}`
    );
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <input
        type="text"
        name="term"
        id="term"
        value={term}
        placeholder="Keyword"
        onChange={(e) => setTerm(e.target.value)}
        className="input"
      />
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={startDate}
        placeholder="Enter Start Date"
        onChange={(e) => setStartDate(e.target.value)}
        className="input"
      />
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
        className="input"
      />
      <select name="distance" id="distance">
        <option value="10">10 miles</option>
        <option value="25">25 miles</option>
        <option value="50">50 miles</option>
      </select>
      <button className="input" id="searchButton">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
