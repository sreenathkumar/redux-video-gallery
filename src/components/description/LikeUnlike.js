import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import {
  incrementLikes,
  incrementUnlikes,
} from "../../features/video/videoSlice";
import { updateLikeUnlike } from "../../features/likeUnlike/likeUnlikeSlice";

export default function LikeUnlike({ id, likes, unlikes }) {
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(incrementLikes());
    dispatch(updateLikeUnlike(id));
  };
  const handleUnlike = () => {
    dispatch(incrementUnlikes());
    dispatch(updateLikeUnlike(id));
  };
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            className="w-5 block"
            src={likeImage}
            alt="Like"
            onClick={handleLike}
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}K
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            className="w-5 block"
            src={unlikeImage}
            alt="Unlike"
            onClick={handleUnlike}
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}K
        </div>
      </div>
    </div>
  );
}
