import { PostType } from "@/typings";
import {
    EllipsisHorizontalIcon,
  } from "@heroicons/react/24/outline";

type Props = {post: PostType};

function PostHeader({post}: Props) {
  return (
    <div className="flex items-center p-5">
      <img
        src={post.userImage}
        alt={post.username}
        className="h-12 rounded-full object-cover border p-1 mr-3"
      />
      <p className="font-bold flex-1">{post.username}</p>
      <EllipsisHorizontalIcon className="h-5" />
    </div>
  );
}

export default PostHeader;
