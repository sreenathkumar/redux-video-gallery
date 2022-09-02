import axios from "../../utils/axios";

// ?tags_like=javascript&tags_like=react&id_ne=4&_limit=5
// ['tags_like=javascript', 'tags_like=react']

export const getRelatedVideos = async ({ tags, id, author }) => {
  const limit = 5;
  let queryString =
    tags?.length > 0 && author !== ""
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_author=${author}&_limit=${limit}`
      : `id_ne=${id}&_author=${author}&_limit=${limit}`;

  const response = await axios.get(`/videos?${queryString}`);

  return response.data;
};
