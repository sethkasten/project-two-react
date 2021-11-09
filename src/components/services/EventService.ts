import axios from "axios";
import { useState } from "react";
import EventResponse from "../../models/EventResponse";
import SingleEventResponse from "../../models/SingleEventResponse";

const key: string = process.env.REACT_APP_TICKETMASTER_KEY || "";

// function to get trending gifs
export const getTrendingEvents = (): Promise<EventResponse> => {
  return axios
    .get("https://app.ticketmaster.com/discovery/v2/events.json", {
      params: { apikey: key },
    })
    .then((response) => {
      return response.data;
    });
};

// function to get gifs by search term

// export const getEventsBySearchTerm = (
//   searchTerm: string
// ): Promise<EventResponse> => {
//   return axios
//     .get("https://api", {
//       params: { api_key: key, q: searchTerm },
//     })
//     .then((response) => {
//       return response.data;
//     });
// };

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
