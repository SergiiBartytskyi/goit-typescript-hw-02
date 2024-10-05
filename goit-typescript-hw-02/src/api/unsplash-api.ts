import axios from "axios";
import { IFetchResponse } from "./unsplash-api.types";

axios.defaults.baseURL = "https://api.unsplash.com/";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
    Authorization: "Client-ID ShVR3i6LdoWAo4L9g8AWxgR8TYEwTxSDCpkOos3heI0",
  },
});

export const fetchPicturesWithQuery = async (
  query: string,
  page: number = 1
): Promise<IFetchResponse> => {
  const response = await instance.get(`/search/photos`, {
    params: {
      query,
      orientation: "landscape",
      page,
      per_page: 20,
    },
  });

  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};
