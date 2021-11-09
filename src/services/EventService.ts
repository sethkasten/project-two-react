import axios from "axios";
import { useState } from "react";
import EventResponse from "../models/EventResponse";
import SingleEventResponse from "../models/SingleEventResponse";

const key: string = process.env.REACT_APP_TICKETMASTER_KEY || "";

// function to get trending gifs
export const getTrendingEvents = (location: string): Promise<EventResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events.json", {
      params: { latlong: location, apikey: key },
    })
    .then((response) => {
      return response.data;
    });
};

// function to get gifs by search term

export const getEventsBySearchTerm = (qsp: any): Promise<EventResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events.json", {
      params: {
        apikey: key,
        ...(qsp.searchTerm ? { keyword: qsp.searchTerm } : {}),
        ...(qsp.searchRadius ? { radius: qsp.searchRadius } : {}),
        ...(qsp.searchDate
          ? { startDateTime: `${qsp.searchDate}T14:00:00Z` }
          : {}),
        ...(qsp.searchCity ? { city: qsp.searchCity } : {}),
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    });
};

// // function to get a gif by id
// export const getGifById = (id: string): Promise<SingleEventResponse> => {
//   return axios
//     .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(id)}`, {
//       params: { api_key: key },
//     })
//     .then((response) => {
//       return response.data;
//     });
// };
