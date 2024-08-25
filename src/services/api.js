import axios from "axios";

const ACCESS_KEY = "PgJ8YZPbbzETI7QsD6gzmS92_1Qo5MpdHFskzGINips";

export const fetchImages = async (query, page, per_page = 12) => {
  const response = await axios.get("https://api.unsplash.com/search/photos/", {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    params: {
      query,
      page,
      per_page,
    },
  });
  return response.data;
};
