import axios from "axios";
import { UnsplashResponse } from "../components/App/App.types";

const ACCESS_KEY = "PgJ8YZPbbzETI7QsD6gzmS92_1Qo5MpdHFskzGINips";

export const fetchImages = async (
  query: string,
  page: number,
  per_page: number = 12
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(
    "https://api.unsplash.com/search/photos/",
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params: {
        query,
        page,
        per_page,
      },
    }
  );
  return response.data;
};
