import axios from "../../utils/axios";

export const updateVideo = async (id, likes, unlikes) => {
  await axios.patch(`/videos/${id}`, {
    likes,
    unlikes,
  });
};
